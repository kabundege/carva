import { Coordinate } from '../interfaces/map-track.interface';

/**
 * Get distance between two points
 * @param coord1
 * @param coord2
 * @returns distance in meter
 */
export const getDistanceBetweenTwoPoints = (
  coord1: Coordinate,
  coord2: Coordinate,
) => {
  if (
    coord1.latitude === coord2.latitude &&
    coord1.longitude === coord2.longitude
  ) {
    return 0;
  }
  const R = 6371e3; // Radius of the earth in m
  const dLat = deg2rad(coord2.latitude - coord1.latitude);
  const dLon = deg2rad(coord2.longitude - coord1.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(coord1.latitude)) *
      Math.cos(deg2rad(coord2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};
