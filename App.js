import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PercetualCalculator from './components/PercetualCalculator'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <PercetualCalculator/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C5C6D0',
    padding: 8,
  },
});
