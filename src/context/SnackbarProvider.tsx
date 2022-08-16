import * as React from 'react';

import { Snackbar } from '../components';
import SnackbarContext from './SnackbarContext';

import type { SnackbarHandle, SnackbarProviderProps } from '../types';

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
  duration,
  ...props
}) => {
  const snackbar = React.useRef<SnackbarHandle>(null);

  const showMessage = React.useCallback((config) => {
    snackbar.current?.showMessage(config);
  }, []);

  const hideMessage = React.useCallback(() => {
    snackbar.current?.hideMessage();
  }, []);

  return (
    <SnackbarContext.Provider value={{ showMessage, hideMessage: hideMessage }}>
      {children}
      <Snackbar
        ref={snackbar}
        defaultDuration={duration}
        backgroundColor={'#6F1E51'}
        textColor={'#FFFFFF'}
        {...props}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
