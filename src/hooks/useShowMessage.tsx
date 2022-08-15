import * as React from 'react';

import { SnackbarContext } from '../context';

const useShowMessage = () => React.useContext(SnackbarContext);

export default useShowMessage;
