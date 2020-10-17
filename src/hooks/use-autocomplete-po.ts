import { autocompletePO, API_KEY, AutocompleteResponse } from 'barikoi-unified';
import { useState, useEffect } from 'react';

export const useAutocompletePO = (apiKey: API_KEY, query: string) => {
  const [result, setResult] = useState<AutocompleteResponse[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    autocompletePO(apiKey, { q: query })
      .then((res) => {
        setLoading(false);
        setResult(res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [apiKey, query]);

  return [result, loading] as [typeof result, typeof loading];
};
