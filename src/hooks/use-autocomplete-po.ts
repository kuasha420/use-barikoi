import { autocompletePO, API_KEY, AutocompleteResponse } from "barikoi-unified";
import { useState, useEffect } from "react";

export const useAutocompletePO = (apiKey: API_KEY, query: string) => {
  const [result, setResult] = useState<AutocompleteResponse[]>();

  useEffect(() => {
    if (!query) {
      return;
    }
    autocompletePO(apiKey, { q: query }).then(setResult).catch(console.error);
  }, [apiKey, query]);

  return result;
};
