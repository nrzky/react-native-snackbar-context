import * as React from 'react';

import { Snackbar } from '../components';
import SnackbarContext from './SnackbarContext';

import type { SnackbarHandle, SnackbarProviderProps } from '../types';

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
  duration,
  ...props
}) => {
  const [messages, setMessages] = React.useState<any[]>([]);
  const snackbar = React.useRef<SnackbarHandle>(null);

  const removeMessage = React.useCallback(() => {
    setMessages((currentMessages) => {
      return currentMessages.filter((_message, index) => index !== 0);
    });
  }, []);

  const showMessage = React.useCallback((config) => {
    setMessages((currentMessages) => [...currentMessages, config]);
  }, []);

  const hideMessage = React.useCallback(() => {
    snackbar.current?.hideMessage();
  }, []);

  React.useEffect(() => {
    if (messages.length) {
      setTimeout(() => snackbar.current?.showMessage(messages[0]), 300);
    }
  }, [messages]);

  return (
    <SnackbarContext.Provider value={{ showMessage, hideMessage: hideMessage }}>
      {children}
      <Snackbar
        ref={snackbar}
        defaultDuration={duration}
        backgroundColor={'#6F1E51'}
        textColor={'#FFFFFF'}
        onHide={removeMessage}
        {...props}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
