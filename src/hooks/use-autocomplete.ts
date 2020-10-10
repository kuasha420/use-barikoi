import { autocomplete, API_KEY, AutocompleteResponse } from "barikoi-unified";
import { useState, useEffect } from "react";

export const useAutocomplete = (
  apiKey: API_KEY,
  query: string,
  latitude?: number,
  longitude?: number,
  scale?: number
) => {
  const [result, setResult] = useState<AutocompleteResponse[]>();

  useEffect(() => {
    if (!query) {
      return;
    }
    autocomplete(apiKey, { q: query, latitude, longitude, scale })
      .then(setResult)
      .catch(console.error);
  }, [apiKey, latitude, longitude, query, scale]);

  return result;
};
