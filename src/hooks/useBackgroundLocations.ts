import {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {addLocation} from '../utils/MMKV.util';
import BackgroundGeolocation, {
  Location,
} from 'react-native-background-geolocation';

interface useBackgroundLocations {
  onChange?: (state: Location) => void;
}

const useBackgroundLocations = ({onChange}: useBackgroundLocations) => {
  useEffect(() => {
    BackgroundGeolocation.requestPermission().then(status => {
      if (status === BackgroundGeolocation.AUTHORIZATION_STATUS_ALWAYS) {
        console.log('[BackgroundGeolocation] - Permission granted');
        setupBackgroundGeolocation();
      } else {
        console.log('[BackgroundGeolocation] - Permission denied');
      }
    });
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
          }
        },
      );

      BackgroundGeolocation.onLocation(async location => {
        if (location) {
          if (onChange) {
            onChange(location);
          }
          addLocation(location);
          // if (!location.coords.speed) {
          //   ToastAndroid.show('Speed not available', ToastAndroid.SHORT);
          // } else if (location.coords.speed < 9) {
          //   ToastAndroid.show('Location is null', ToastAndroid.SHORT);
          // } else {
          //   ToastAndroid.show(
          //     `Your speed of ${location.coords.speed} can't be recorded`,
          //     ToastAndroid.SHORT,
          //   );
          // }
        } else {
          ToastAndroid.show('Location is null', ToastAndroid.SHORT);
        }
      });
      BackgroundGeolocation.onMotionChange(async motion => {
        if (motion) {
          if (onChange) {
            onChange(motion.location);
          }
          addLocation(motion.location);
          // if (!location.coords.speed) {
          //   ToastAndroid.show('Speed not available', ToastAndroid.SHORT);
          // } else if (location.coords.speed < 9) {
          //   ToastAndroid.show('Location is null', ToastAndroid.SHORT);
          // } else {
          //   ToastAndroid.show(
          //     `Your speed of ${location.coords.speed} can't be recorded`,
          //     ToastAndroid.SHORT,
          //   );
          // }
          ToastAndroid.show('Location is null', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(
            'Motion Change with vsal of null',
            ToastAndroid.SHORT,
          );
        }
      });
    };

    setupBackgroundGeolocation();

    return () => {
      BackgroundGeolocation.stop();
    };
  }, [onChange]);
};

export default useBackgroundLocations;
