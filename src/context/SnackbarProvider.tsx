import * as React from 'react';

import { Snackbar } from '../components';
import SnackbarContext from './SnackbarContext';

import type {
  ActionButtonProps,
  SnackbarHandle,
  SnackbarProviderProps,
} from '../types';

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
  duration,
}) => {
  const snackbar = React.useRef<SnackbarHandle>(null);

  const showMessage = React.useCallback(
    (config: {
      message: string;
      duration?: number;
      actions?: ActionButtonProps[];
    }) => {
      snackbar.current?.showMessage(config);
    },
    []
  );

  return (
    <SnackbarContext.Provider value={showMessage}>
      {children}
      <Snackbar ref={snackbar} defaultDuration={duration} />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
