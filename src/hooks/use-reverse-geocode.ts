import { API_KEY, reverseGeocode, ReverseGeocodeResponse } from 'barikoi-unified';
import { useEffect, useState } from 'react';

export interface ReverseGeocodeExtraFields {
  district?: boolean;
  post_code?: boolean;
  country?: boolean;
  sub_district?: boolean;
  union?: boolean;
  pauroshova?: boolean;
  location_type?: boolean;
}

export const useReverseGeocode = (
  apiKey: API_KEY,
  latitude: number,
  longitude: number,
  extraFields: ReverseGeocodeExtraFields = {
    district: undefined,
    post_code: undefined,
    country: undefined,
    sub_district: undefined,
    union: undefined,
    pauroshova: undefined,
    location_type: undefined,
  }
) => {
  const {
    district,
    post_code,
    country,
    sub_district,
    union,
    pauroshova,
    location_type,
  } = extraFields;
  const [result, setResult] = useState<ReverseGeocodeResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!latitude || !longitude) {
      return;
    }
    setLoading(true);
    reverseGeocode(apiKey, {
      latitude,
      longitude,
      district,
      post_code,
      country,
      sub_district,
      union,
      pauroshova,
      location_type,
    })
      .then((res) => {
        setLoading(false);
        setResult(res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [
    apiKey,
    country,
    district,
    latitude,
    location_type,
    longitude,
    pauroshova,
    post_code,
    sub_district,
    union,
  ]);

  return [result, loading] as [typeof result, typeof loading];
};
