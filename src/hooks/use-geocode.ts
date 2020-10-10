import { API_KEY, geocode, GeocodeResponse } from "barikoi-unified";
import { useEffect, useState } from "react";

export const useGeocode = (apiKey: API_KEY, place_id: number) => {
  const [result, setResult] = useState<GeocodeResponse>();

  useEffect(() => {
    if (!place_id) {
      return;
    }
    geocode(apiKey, { place_id }).then(setResult).catch(console.error);
  }, [apiKey, place_id]);

  return result;
};
