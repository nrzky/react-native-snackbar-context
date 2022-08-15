import * as React from 'react';

import { Snackbar } from '../components';
import SnackbarContext from './SnackbarContext';

import type { SnackbarHandle, SnackbarProviderProps } from '../types';

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  const snackbar = React.useRef<SnackbarHandle>(null);

  const showMessage = React.useCallback(
    (config: { message: string; duration?: number }) => {
      snackbar.current?.showMessage(config);
    },
    []
  );

  return (
    <SnackbarContext.Provider value={showMessage}>
      {children}
      <Snackbar ref={snackbar} />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
