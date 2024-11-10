import {View} from 'react-native';
import {Text} from '../../components';
import useDB from '../../hooks/useDB';
import React, {useEffect} from 'react';
import BackgroundGeolocation from 'react-native-background-geolocation';

const Login = () => {
  const {addLocation, getLocations} = useDB();

  useEffect(() => {
    const setupBackgroundGeolocation = () => {
      BackgroundGeolocation.ready(
        {
          desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
          stopOnTerminate: false,
          distanceFilter: 50,
          startOnBoot: true,
          debug: true,
        },
        state => {
          if (!state.enabled) {
            BackgroundGeolocation.start();
          } else {
            BackgroundGeolocation.requestPermission().then(status => {
              if (
                status === BackgroundGeolocation.AUTHORIZATION_STATUS_ALWAYS
              ) {
                console.log('[BackgroundGeolocation] - Permission granted');
                BackgroundGeolocation.start();
              } else {
                console.log('[BackgroundGeolocation] - Permission denied');
              }
            });
          }
        },
      );

      BackgroundGeolocation.onLocation(async location => {
        console.log('[location] -', {location});
        // addLocation(location);
      });
    };

    setupBackgroundGeolocation();

    return () => {
      BackgroundGeolocation.stop();
    };
  }, []);

  // useEffect(() => {
  //   getLocations().then(res =>
  //     console.log('====== Locations available ======', res),
  //   );
  // }, [getLocations]);

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
