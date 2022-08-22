import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  SnackbarAnimations,
  SnackbarColors,
  SnackbarDurations,
  SnackbarPositions,
  useSnackbarContext,
} from 'react-native-snackbar-context';

type SnackbarTypes = 'default' | 'success' | 'info' | 'warning' | 'error';

const snackbarTypes = ['Default', 'Success', 'Info', 'Warning', 'Error'];

const MainPage: React.FC = () => {
  const { showMessage, hideMessage } = useSnackbarContext();

  const handleShowSnackbar = React.useCallback(
    (type: SnackbarTypes) => {
      showMessage({
        type: type,
        message: 'React Native Snackbar Context',
        position: SnackbarPositions.BOTTOM,
        animation: SnackbarAnimations.ZOOM,
        duration: SnackbarDurations.BLINK,
        actions: [{ title: 'OK', onPress: hideMessage }],
      });
    },
    [showMessage, hideMessage]
  );

  return (
    <View style={styles.container}>
      {snackbarTypes.map((snackbarType) => {
        const type = snackbarType.toLowerCase();
        return (
          <TouchableOpacity
            key={snackbarType}
            style={[
              styles.button,
              { backgroundColor: SnackbarColors[type].backgroundColor },
            ]}
            onPress={() => handleShowSnackbar(type as SnackbarTypes)}
          >
            <Text
              style={[
                styles.buttonTitle,
                { color: SnackbarColors[type].textColor },
              ]}
            >
              {snackbarType} Snackbar
            </Text>
          </TouchableOpacity>
        );
      })}
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
  button: {
    height: 50,
    width: '60%',
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
