import * as React from 'react';
import {
  SnackbarProvider,
  SnackbarColors,
  SnackbarSpaces,
} from 'react-native-snackbar-context';

import MainPage from './components/MainPage';

export default function App() {
  return (
    <SnackbarProvider
      duration={1500}
      spaces={{ ...SnackbarSpaces, bottom: 40 }}
      colorPalette={{
        ...SnackbarColors,
        default: {
          backgroundColor: SnackbarColors.default.backgroundColor,
          textColor: '#ffffff',
        },
      }}
    >
      <MainPage />
    </SnackbarProvider>
  );
}
