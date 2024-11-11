import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import useBackgroundLocations from '../../hooks/useBackgroundLocations';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Location} from 'react-native-background-geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {Button, ToastAndroid, View} from 'react-native';
import {getLocations} from '../../utils/MMKV.util';
import {Colors, globalStyles} from '../../styles';
import Config from 'react-native-config';
import {isIos} from '../../constants';
import styles from './Home.styles';

const Login = () => {
  const [directions, setDirection] = useState<Location[]>([]);
  const [showDirections, setShowDirection] = useState(false);
  const mapRef = useRef<MapView>(null);

  useBackgroundLocations({
    onChange: location => {
      if (mapRef) {
        mapRef.current?.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      }
    },
  });

  useEffect(() => {
    if (showDirections) {
      const locations = getLocations();
      ToastAndroid.show(
        `Retrieved ${locations.length} successfully`,
        ToastAndroid.LONG,
      );
      if (locations.length) {
        setDirection(locations);
      } else {
        ToastAndroid.show('No locations found', ToastAndroid.SHORT);
      }
    }
  }, [showDirections]);

  const toggleShowDirection = () => {
    setShowDirection(prev => !prev);
  };

  const origin = useMemo(
    () =>
      directions.length
        ? {
            latitude: directions[0].coords.latitude,
            longitude: directions[0].coords.longitude,
          }
        : undefined,
    [directions],
  );

  const destination = useMemo(
    () =>
      directions.length
        ? {
            latitude: directions[directions.length - 1].coords.latitude,
            longitude: directions[directions.length - 1].coords.longitude,
          }
        : undefined,
    [directions],
  );

  return (
    <View style={globalStyles.screen}>
      <MapView
        ref={mapRef}
        zoomEnabled
        showsCompass
        zoomControlEnabled
        showsUserLocation
        style={styles.map}
        mapType="satellite"
        showsMyLocationButton
        tintColor={Colors.PRIMARY}
        provider={isIos ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}>
        {showDirections && origin && destination ? (
          <MapViewDirections
            mode="DRIVING"
            origin={origin}
            precision="high"
            destination={destination}
            strokeColor={Colors.PRIMARY}
            apikey={Config.GOOGLE_API_KEY}
          />
        ) : (
          <></>
        )}
      </MapView>
      <Button
        title={`${showDirections ? 'Hide' : 'Show'} Direction ${
          directions.length
        }`}
        onPress={toggleShowDirection}
      />
    </View>
  );
};

export default Login;
