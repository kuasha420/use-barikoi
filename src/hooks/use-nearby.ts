import { API_KEY, nearby, NearbyResponse, PlaceType } from 'barikoi-unified';
import { useEffect, useState } from 'react';

export const useNearby = (
  apiKey: API_KEY,
  latitude: number,
  longitude: number,
  types?: PlaceType | string[],
  distance = 1,
  limit = 5
) => {
  const [result, setResult] = useState<NearbyResponse[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!latitude || !longitude) {
      return;
    }
    setLoading(true);
    const type = Array.isArray(types) ? { q: types } : types ? { ptype: types } : {};
    nearby(apiKey, { latitude, longitude, distance, limit, ...type })
      .then((res) => {
        setLoading(false);
        setResult(res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [apiKey, latitude, longitude, distance, limit, types]);

  return [result, loading] as [typeof result, typeof loading];
};
