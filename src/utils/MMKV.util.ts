import {MMKV} from 'react-native-mmkv';
import {Location} from 'react-native-background-geolocation';
import {ToastAndroid} from 'react-native';

export const DB_PATH = 'location/storage';
export const DB_NAME = 'user-location-storage';

const storage = new MMKV();
// const storage = new MMKV({
//   id: DB_NAME,
//   readOnly: false,
//   mode: Mode.MULTI_PROCESS,
//   encryptionKey: Config.ENCRYPTION_KEY,
// });

const addLocation = (data: Location) => {
  try {
    ToastAndroid.show('LOcation saved successfully', ToastAndroid.SHORT);
    storage.set(data.uuid, JSON.stringify(data));
  } catch (error) {
    ToastAndroid.show('Error storing data ' + error, ToastAndroid.SHORT);
  }
};

const getLocations = () => {
  const keys = getLocationsKeys();
  const locations: Location[] = [];

  for (const key of keys) {
    const location = storage.getString(key);
    if (location) {
      locations.push(JSON.parse(location));
    }
  }

  return locations;
};

const getLocationsKeys = () => {
  return storage.getAllKeys();
};

export {storage, addLocation, getLocationsKeys, getLocations};
