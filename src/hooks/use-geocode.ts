import { API_KEY, geocode, GeocodeResponse } from 'barikoi-unified';
import { useEffect, useState } from 'react';

export const useGeocode = (apiKey: API_KEY, place_id: number) => {
  const [result, setResult] = useState<GeocodeResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!place_id) {
      return;
    }
    setLoading(true);
    geocode(apiKey, { place_id })
      .then((res) => {
        setLoading(false);
        setResult(res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [apiKey, place_id]);

  return [result, loading] as [typeof result, typeof loading];
};
