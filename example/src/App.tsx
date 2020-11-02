import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Latlon, { results } from 'react-native-latlon';

export default function App() {
  const [result, setResult] = React.useState<results>({
    city: '',
    country: '',
    lat: 0,
    lon: 0,
  });

  React.useEffect(() => {
    Latlon.getIp().then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        city: {result.city}
        country: {result.country}
        lat: {result.lat}
        lon: {result.lon}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
