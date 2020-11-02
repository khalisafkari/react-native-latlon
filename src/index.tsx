import { NativeModules } from 'react-native';
export type results = {
  lon: number;
  lat: number;
  city: string;
  country: string;
};
type LatlonType = {
  getIp(): Promise<results>;
};
const { Latlon } = NativeModules;
export default Latlon as LatlonType;
