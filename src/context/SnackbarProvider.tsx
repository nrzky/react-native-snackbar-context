import * as React from 'react';

import { Snackbar } from '../components';
import { MessageType } from '../helpers';
import { Colors } from '../constants';
import SnackbarContext from './SnackbarContext';

import type { SnackbarHandle, SnackbarProviderProps } from '../types';

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
  duration,
  colorPalette,
  ...props
}) => {
  const snackbar = React.useRef<SnackbarHandle>(null);
  const [messages, setMessages] = React.useState<any[]>([]);

  const colors = React.useMemo(() => {
    return new MessageType(
      messages[0]?.type ?? 'default',
      colorPalette ?? Colors
    ).getColors();
  }, [colorPalette, messages]);

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
        {...props}
        ref={snackbar}
        defaultDuration={duration}
        backgroundColor={colors.backgroundColor}
        textColor={colors.textColor}
        onHide={removeMessage}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
