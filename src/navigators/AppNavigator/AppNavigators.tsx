import {RouteNames} from '../../config';
import useAppSelector from '../../hooks/useAppSelector';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStackParamsList} from '../../types/navigator.type';
import {AppStateStatus, ToastAndroid} from 'react-native';
import useAppDispatch from '../../hooks/useAppDispatch';
import CodePush from 'react-native-code-push';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config';
import {
  CodePushState,
  setCodePushVersion,
} from '../../store/Reducers/CodePushReducer';
import {useAppState} from '../../hooks/useAppState';
import {useIsConnected} from 'react-native-offline';
import {focusManager} from '@tanstack/react-query';
import BootSplash from 'react-native-bootsplash';
import {ErrorBoundary} from '../../components';
import {isAndroid} from '../../constants';
import {globalStyles} from '../../styles';
import {LoginScreen} from '../../screens';
import React, {useEffect} from 'react';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const headerShown = false;

const Navigation = () => {
  const isConnected = useIsConnected();
  const codepush_Store = useAppSelector(state => state.codepush);
  const {isAuth} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    // 0. handle focus with react-query (only if connected)
    if (isConnected) {
      focusManager.setFocused(nextAppState === 'active');
    }

    if (!isConnected) {
      return;
    }
    // 1. the latest code push version
    const res = await CodePush.getUpdateMetadata();
    if (!res) {
      return CodePush_Handler();
    }
    // 2. convert to number
    const Latest_CPV = Number(res.label.replace('v', ''));
    // installation conditions
    const Can_Install_CPC = codepush_Store.currVersion < Latest_CPV;
    if (Can_Install_CPC) {
      CodePush_Handler({
        currVersion: Latest_CPV,
        appVersion: Number(res.appVersion),
      });
    } else {
      /**
       * initialize the code push
       * 11th version on PRODUCTION
       * because the dev version is already done
       * */
      if (!Config.BASE_URL.includes('dev') && !codepush_Store.currVersion) {
        dispatch(setCodePushVersion({currVersion: 11, appVersion: 21.2}));
        handleAppStateChange(nextAppState);
      }
    }
    // }
  };

  useAppState(handleAppStateChange);

  const CodePush_Handler = (codepush_State?: CodePushState) => {
    // 0. on check for updates on staging or production
    if (Config.NODE_ENV === 'development') return;
    // 1. update the state
    if (codepush_State) {
      dispatch(setCodePushVersion(codepush_State));
    }
    // 2. install update
    CodePush.sync(
      {
        updateDialog: {
          optionalUpdateMessage: t('UPdateNSFOContent'),
          mandatoryUpdateMessage: t('UPdateNSFOContent'),
          mandatoryContinueButtonLabel: t('install'),
          optionalInstallButtonLabel: t('install'),
          optionalIgnoreButtonLabel: t('ignore'),
          title: t('Update NSFO App'),
        },
        mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      status => {
        switch (status) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            if (isAndroid) {
              ToastAndroid.show('Checking for updates.', ToastAndroid.SHORT);
            }
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            if (isAndroid) {
              ToastAndroid.show(
                'Downloading, Please wait...',
                ToastAndroid.LONG,
              );
            }
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            if (isAndroid) {
              ToastAndroid.show('Installing update.', ToastAndroid.LONG);
            }
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
            if (isAndroid) {
              ToastAndroid.show('Up-to-date.', ToastAndroid.SHORT);
            }
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            if (isAndroid) {
              ToastAndroid.show('Update installed.', ToastAndroid.SHORT);
            }
            break;
          default:
            break;
        }
      },
      ({receivedBytes, totalBytes}) => {
        const DLProgress = (receivedBytes / totalBytes) * 100;
        if (DLProgress > 98 && isAndroid) {
          ToastAndroid.show('NSFO will restart shortly', ToastAndroid.SHORT);
        }
      },
    );
  };

  const PrivateRoutes = <></>;

  const PublicRoute = (
    <>
      <Stack.Screen name={RouteNames.screens.Login} component={LoginScreen} />
    </>
  );

  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={globalStyles.flex1}>
        <Stack.Navigator
          screenOptions={{headerShown}}
          initialRouteName={
            !isAuth ? RouteNames.screens.Login : RouteNames.screens.Splash
          }>
          {!isAuth ? PublicRoute : PrivateRoutes}
        </Stack.Navigator>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
};

export default Navigation;
