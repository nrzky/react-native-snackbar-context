import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSnackbarContext } from 'react-native-snackbar-context';

const MainPage: React.FC = () => {
  const { showMessage, hideMessage } = useSnackbarContext();

  const handleShowSnackbar = React.useCallback(() => {
    showMessage({
      type: 'success',
      message: 'React Native Snackbar!',
      duration: 3000,
      actions: [
        {
          title: 'CLOSE',
          onPress: hideMessage,
          textColor: '#FFFFFF',
        },
      ],
    });
  }, [hideMessage, showMessage]);

  React.useEffect(() => {
    setTimeout(() => {
      handleShowSnackbar();
    }, 2000);
  }, [handleShowSnackbar]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleShowSnackbar}>
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
