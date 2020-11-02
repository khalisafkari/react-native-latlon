import { NativeModules } from 'react-native';

type LatlonType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Latlon } = NativeModules;

export default Latlon as LatlonType;
