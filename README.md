# react-native-latlon

react native latlon by ip internet

## Installation

```sh
npm install react-native-latlon
```

**use yarn**

```sh
yarn add react-native-latlon
```

## Usage

```typescript jsx
import Latlon,{ results } from "react-native-latlon";

interface results {
  lon: number;
  lat: number;
  city: string;
  country: string;
};

LatLon.getIp().then((results: results) => {console.log(results)})


```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
