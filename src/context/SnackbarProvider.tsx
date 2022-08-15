import * as React from 'react';

import SnackbarContext from './SnackbarContext';

import type { SnackbarProviderProps } from '../types';

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <SnackbarContext.Provider value={undefined}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
