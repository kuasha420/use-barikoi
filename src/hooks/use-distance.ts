import { API_KEY, distance } from 'barikoi-unified';
import { useEffect, useState } from 'react';

export const useDistance = (
  apiKey: API_KEY,
  latitudeFrom: number,
  longitudeFrom: number,
  latitudeTo: number,
  longitudeTo: number
) => {
  const [result, setResult] = useState<number>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!latitudeFrom || !longitudeFrom || !latitudeTo || !longitudeTo) {
      return;
    }
    setLoading(true);
    distance(apiKey, {
      form: { latitude: latitudeFrom, longitude: longitudeFrom },
      to: { latitude: latitudeTo, longitude: longitudeTo },
    })
      .then((res) => {
        setLoading(false);
        setResult(res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [apiKey, latitudeFrom, latitudeTo, longitudeFrom, longitudeTo]);

  return [result, loading] as [typeof result, typeof loading];
};
