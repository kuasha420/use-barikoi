import { API_KEY, distance } from "barikoi-unified";
import { useEffect, useState } from "react";

export const useDistance = (
  apiKey: API_KEY,
  latitudeFrom: number,
  longitudeFrom: number,
  latitudeTo: number,
  longitudeTo: number
) => {
  const [result, setResult] = useState<number>();

  useEffect(() => {
    if (!latitudeFrom || !longitudeFrom || !latitudeTo || !longitudeTo) {
      return;
    }
    distance(apiKey, {
      form: { latitude: latitudeFrom, longitude: longitudeFrom },
      to: { latitude: latitudeTo, longitude: longitudeTo },
    })
      .then(setResult)
      .catch(console.error);
  }, [apiKey, latitudeFrom, latitudeTo, longitudeFrom, longitudeTo]);

  return result;
};
