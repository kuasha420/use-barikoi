import { API_KEY, autocomplete, AutocompleteResponse } from 'barikoi-unified';
import { useEffect, useState } from 'react';

export const useAutocomplete = (
  apiKey: API_KEY,
  query: string,
  latitude?: number,
  longitude?: number,
  scale?: number
) => {
  const [result, setResult] = useState<AutocompleteResponse[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    autocomplete(apiKey, { q: query, latitude, longitude, scale })
      .then((res) => {
        setLoading(false);
        setResult(res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [apiKey, latitude, longitude, query, scale]);

  return [result, loading] as [typeof result, typeof loading];
};
