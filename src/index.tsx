import { NativeModules, Platform } from 'react-native';
const { Latlon } = NativeModules;
export type results = {
  lon: number;
  lat: number;
  city: string;
  country: string;
};

const getCountry = (): Promise<results> => {
  if (Platform.OS === 'android') {
    return new Promise<results>((resolve, reject) => {
      Latlon.getIp().then(resolve).catch(reject);
    });
  } else {
    return new Promise<results>((resolve, reject) => {
      fetch('https://api-geolocation.zeit.sh')
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  }
};

export default getCountry();
