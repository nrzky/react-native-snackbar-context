import * as React from 'react';

import type { SnackbarHandle } from '../types';

const SnackbarContext = React.createContext(
  (() => {}) as SnackbarHandle['showMessage']
);

export default SnackbarContext;
