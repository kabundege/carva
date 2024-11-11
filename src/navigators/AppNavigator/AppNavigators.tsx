import {RouteNames} from '../../config';
import {AppStateStatus} from 'react-native';
import useAppSelector from '../../hooks/useAppSelector';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStackParamsList} from '../../types/navigator.type';
import {useAppState} from '../../hooks/useAppState';
import {useIsConnected} from 'react-native-offline';
import {focusManager} from '@tanstack/react-query';
import BootSplash from 'react-native-bootsplash';
import {ErrorBoundary} from '../../components';
import {globalStyles} from '../../styles';
import {HomeScreen} from '../../screens';
import React, {useEffect} from 'react';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const headerShown = false;

const Navigation = () => {
  const isConnected = useIsConnected();
  const {isAuth} = useAppSelector(state => state.auth);

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
  };

  useAppState(handleAppStateChange);

  const PrivateRoutes = <></>;

  const PublicRoute = (
    <>
      <Stack.Screen name={RouteNames.screens.Home} component={HomeScreen} />
    </>
  );

  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={globalStyles.flex1}>
        <Stack.Navigator
          screenOptions={{headerShown}}
          initialRouteName={
            !isAuth ? RouteNames.screens.Home : RouteNames.screens.Splash
          }>
          {!isAuth ? PublicRoute : PrivateRoutes}
        </Stack.Navigator>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
};

export default Navigation;
