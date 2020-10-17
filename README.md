# useBarikoi - React Hooks to use Barikoi APIs easily!

[![Star IT Ltd](https://staritltd.com/wp-content/uploads/2019/10/Web_Logo_of_Star_IT_158x80.png)](https://staritltd.com)

🔥 Barikoi Location & Places API with hooks 🔥

use-barikoi wraps various barikoi apis in easy to use and performant custom react hooks for ease of use and doing it the react way!

- Written on TypeScript.
- Fully typed and ready for consumption in any JavaScript or TypeScript React/React Native Project.
- supports autocomplete, distance, nearby, geocode, reverse geocode apis.
- Full inteliSense support for API Queries and Responses.

This library uses barikoi-unified under the hood and is used by react-barikoi and react-native-barikoi component libraries.

## Installation & Usage

### For node/react-native

Install with your favorite package manager.

Using Yarn:

```
yarn add use-barikoi
```

Using NPM:

```
npm i use-barikoi

```

Now you can import 6 API hooks and an `useDebounce` utility hook to easily debounce api requests.

```tsx
import React, { useState } from 'react';
import { useAutocomplete, useDebounce } from 'use-barikoi';

export const App: React.FC = ({}) => {
  const apiKey = 'YOUR-API-KEY';

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const value = useDebounce(query, 1000);

  const [result, isLoading] = useAutocomplete(apiKey, value);

  return (
    <section className="bk-section">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name="query"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setQuery(e.target.value);
          }}
        />
      </form>
      {isLoading && <div class="loading"></div>}
      {autocomplete?.map((result) => (
        <div key={result.id}>
          <div
            onClick={() => {
              setSearch(result.address);
              console.log(result);
            }}
          >
            {result.address}
          </div>
        </div>
      ))}
    </section>
  );
};
```

## APIS

### Difference between v2 & v1

Version 2 of the library introduces loading state on all 6 API. Where v1 of the library used to return only result, v2 returns an array where first element is the result and second element is a boolean indicating loading status of the API.

This library exports 7 hooks. Those are as follows:

### Version 2

```typescript
// Autocomplete
const useAutocomplete = (apiKey: API_KEY, query: string, latitude?: number, longitude?: number, scale?: number) => [AutocompleteResponse[] | undefined, boolean];

// Autocomplete (Post Office)
const useAutocompletePO: (apiKey: API_KEY, query: string) => [AutocompleteResponse[] | undefined, boolean]

// Distance
const useDistance: (apiKey: API_KEY, latitudeFrom: number, longitudeFrom: number, latitudeTo: number, longitudeTo: number) => [number | undefined, boolean]

// Geocode
const useGeocode: (apiKey: API_KEY, place_id: number) => [GeocodeResponse | undefined, boolean]

// Nearby
const useNearby: (apiKey: API_KEY, latitude: number, longitude: number, types?: PlaceType, distance?: number, limit?: number) => [NearbyResponse[] | undefined, boolean]

// Reverse Geocode
interface ReverseGeocodeExtraFields {
  district?: boolean;
  post_code?: boolean;
  country?: boolean;
  sub_district?: boolean;
  union?: boolean;
  pauroshova?: boolean;
  location_type?: boolean;
}

const useReverseGeocode: (apiKey: API_KEY, latitude: number, longitude: number, extraFields?: ReverseGeocodeExtraFields) => [ReverseGeocodeResponse | undefined, boolean]

// Debounce Hook
const useDebounce: <T>(value: T, delay: number) => T
```

### Version 1

<details>
  <summary>Click to View V1 API</summary>
  
  ```typescript
  // Autocomplete
  const useAutocomplete = (apiKey: API_KEY, query: string, latitude?: number, longitude?: number, scale?: number) => AutocompleteResponse[] | undefined;

// Autocomplete (Post Office)
const useAutocompletePO: (apiKey: API_KEY, query: string) => AutocompleteResponse[] | undefined

// Distance
const useDistance: (apiKey: API_KEY, latitudeFrom: number, longitudeFrom: number, latitudeTo: number, longitudeTo: number) => number | undefined

// Geocode
const useGeocode: (apiKey: API_KEY, place_id: number) => GeocodeResponse | undefined

// Nearby
const useNearby: (apiKey: API_KEY, latitude: number, longitude: number, types?: PlaceType, distance?: number, limit?: number) => NearbyResponse[] | undefined

// Reverse Geocode
interface ReverseGeocodeExtraFields {
district?: boolean;
post_code?: boolean;
country?: boolean;
sub_district?: boolean;
union?: boolean;
pauroshova?: boolean;
location_type?: boolean;
}

const useReverseGeocode: (apiKey: API_KEY, latitude: number, longitude: number, extraFields?: ReverseGeocodeExtraFields) => ReverseGeocodeResponse | undefined

// Debounce Hook
const useDebounce: <T>(value: T, delay: number) => T

```

</details>

## License

This package is licensed under the MIT License.

## Contribution

Any kind of contribution is welcome. Thanks!
```
