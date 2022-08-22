import * as React from 'react';
import {
  SnackbarAnimations,
  SnackbarProvider,
} from 'react-native-snackbar-context';

import MainPage from './components/MainPage';

const App = () => {
  return (
    <SnackbarProvider animation={SnackbarAnimations.FLICKER}>
      <MainPage />
    </SnackbarProvider>
  );
};

export default App;
