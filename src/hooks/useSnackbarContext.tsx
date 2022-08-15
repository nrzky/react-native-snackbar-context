import * as React from 'react';

import { SnackbarContext } from '../context';

const useSnackbarContext = () => React.useContext(SnackbarContext);

export default useSnackbarContext;
