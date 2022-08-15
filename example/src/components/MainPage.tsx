import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useShowMessage } from 'react-native-snackbar-context';

const MainPage: React.FC = () => {
  const showMessage = useShowMessage();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          showMessage({
            message: 'Hello World!',
            duration: 5000,
            actions: [{ title: 'CANCEL' }, { title: 'DONE' }],
          })
        }
      >
        <Text>Main Page!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
