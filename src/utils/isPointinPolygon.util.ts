/**
 * Represents a point with latitude and longitude coordinates.
 */
type Point = {
  latitude: number;
  longitude: number;
};

/**
 * Represents the parameters for the `isPointInPolygon` function.
 */
interface TisPointInPolygon {
  point: Point;
  polygonPoints: Point[];
}

/**
 * Checks if a given point is inside a polygon.
 * @param {TisPointInPolygon} params - The parameters for the function.
 * @returns {boolean} - Returns `true` if the point is inside the polygon, `false` otherwise.
 */
export const isPointInPolygon = ({
  point,
  polygonPoints,
}: TisPointInPolygon): boolean => {
  const {latitude: lat, longitude: lng} = point;
  let isInside = false;

  for (
    let i = 0, j = polygonPoints.length - 1;
    i < polygonPoints.length;
    j = i++
  ) {
    const xi = polygonPoints[i].latitude,
      yi = polygonPoints[i].longitude;
    const xj = polygonPoints[j].latitude,
      yj = polygonPoints[j].longitude;

    const intersect =
      yi > lng !== yj > lng && lat < ((xj - xi) * (lng - yi)) / (yj - yi) + xi;
    if (intersect) isInside = !isInside;
  }

  return isInside;
};
