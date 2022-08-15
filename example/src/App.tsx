import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SnackbarProvider } from 'react-native-snackbar-context';

export default function App() {
  return (
    <SnackbarProvider>
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    </SnackbarProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
