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
  spaces,
  ...props
}) => {
  const snackbar = React.useRef<SnackbarHandle>(null);
  const [messages, setMessages] = React.useState<any[]>([]);

  const colors = React.useMemo(() => {
    const messageType = messages[0]?.type ?? 'default';
    const messageColors = colorPalette ?? Colors;
    return new MessageType(messageType, messageColors).getColors();
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
        spaces={spaces}
        onHide={removeMessage}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
