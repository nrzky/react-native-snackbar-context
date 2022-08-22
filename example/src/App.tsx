import * as React from 'react';
import { SnackbarProvider } from 'react-native-snackbar-context';

import MainPage from './components/MainPage';

export default function App() {
  return (
    <SnackbarProvider animation="zoom">
      <MainPage />
    </SnackbarProvider>
  );
}
