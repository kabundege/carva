import React from 'react';
import {Provider} from 'react-redux';
import Navigators from './src/navigators';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast, {ToastConfig} from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {NetworkProvider} from 'react-native-offline';
import {linking} from './src/config';
import {
  hydrate,
  dehydrate,
  QueryClient,
  MutationCache,
  QueryClientProvider,
} from '@tanstack/react-query';
import {QUERY_CACHE_DURATION, REQUEST_RETRY_DELAY} from './src/constants';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from './src/utils/toast.util';
import {AxiosResponse} from 'axios';
import i18n from './src/translations/i18n';
import NetInfo from '@react-native-community/netinfo';
import MutationsSyncHelper from './src/utils/queryMutations.util';
import {ErrorResponse, SuccessResponse} from './src/hooks/useFetch';
import {EventProvider} from 'react-native-outside-press';
import ToastType from './src/enums/toast-type.enum';
import {CustomToast} from './src/components';

export const toastConfig: ToastConfig = {
  success: ({text1, text2}) => (
    <CustomToast type={ToastType.SUCCESS} title={text1} message={text2} />
  ),
  error: ({text1, text2}) => (
    <CustomToast type={ToastType.ERROR} title={text1} message={text2} />
  ),
  info: ({text1, text2}) => (
    <CustomToast type={ToastType.INFO} title={text1} message={text2} />
  ),
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      gcTime: QUERY_CACHE_DURATION, // 1 Day
    },
    mutations: {
      retry: Infinity,
      retryDelay: REQUEST_RETRY_DELAY,
    },
  }, // configure global cache callbacks to show toast notifications
  mutationCache: new MutationCache({
    onSuccess: (response: any) => {
      const res = response as AxiosResponse<SuccessResponse<any>, any>;
      displaySuccessMessage(i18n.t('success'), res.data.message);
    },
    onError: error => {
      const newError = error as ErrorResponse;

      displayErrorMessage(
        i18n.t('error'),
        newError.response?.data.message || error.message,
      );
      displayErrorMessage(i18n.t('error'), 'MUTATION ERROR');
    },
  }),
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 1000,
});

MutationsSyncHelper(queryClient);

const state = dehydrate(queryClient);

// The mutation can then be hydrated again when the application is started:
hydrate(queryClient, state);

const App = () => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{persister: asyncStoragePersister}}
    onSuccess={() => {
      // resume mutations after initial restore from localStorage was successful (only if connected)
      NetInfo.fetch().then(res => {
        if (res.isConnected) {
          queryClient.resumePausedMutations();
        }
      });
    }}>
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <EventProvider>
              <NavigationContainer linking={linking}>
                <Navigators />
              </NavigationContainer>
            </EventProvider>
          </PersistGate>
        </Provider>
      </NetworkProvider>
    </QueryClientProvider>
    <Toast config={toastConfig} />
  </PersistQueryClientProvider>
);

export default App;
