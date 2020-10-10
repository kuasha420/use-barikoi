import { API_KEY, nearby, NearbyResponse, PlaceType } from "barikoi-unified";
import { useEffect, useState } from "react";

export const useNearby = (
  apiKey: API_KEY,
  latitude: number,
  longitude: number,
  types?: PlaceType | string[],
  distance = 1,
  limit = 5
) => {
  const [result, setResult] = useState<NearbyResponse[]>();

  useEffect(() => {
    if (!latitude || !longitude) {
      return;
    }
    const type = Array.isArray(types) ? { q: types } : types ? { ptype: types } : {};
    nearby(apiKey, { latitude, longitude, distance, limit, ...type })
      .then(setResult)
      .catch(console.error);
  }, [apiKey, latitude, longitude, distance, limit, types]);

  return result;
};
