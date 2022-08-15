import * as React from 'react';

import type { SnackbarHandle } from '../types';

const SnackbarContext = React.createContext({
  showMessage: () => {},
  hideMessage: () => {},
} as SnackbarHandle);

export default SnackbarContext;
