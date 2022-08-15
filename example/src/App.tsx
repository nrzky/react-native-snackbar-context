import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getMessage } from 'react-native-snackbar-context';

export default function App() {
  const message = React.useMemo(() => {
    return getMessage();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
