import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSnackbarContext } from 'react-native-snackbar-context';

const MainPage: React.FC = () => {
  const { showMessage, hideMessage } = useSnackbarContext();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          showMessage({
            message: 'Hello React Native Snackbar',
            duration: 5000,
            actions: [
              {
                title: 'CLOSE',
                onPress: hideMessage,
                textColor: '#FFFFFF',
              },
            ],
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
