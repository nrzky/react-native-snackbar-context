import * as React from 'react';

import { Snackbar } from '../components';
import { MessageType } from '../helpers';
import { Colors, MessageTypes } from '../constants';
import SnackbarContext from './SnackbarContext';

import type { SnackbarHandle, SnackbarProviderProps } from '../types';

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
  duration,
  animation,
  position,
  colorPalette,
  spaces,
  customAnimation,
  ...props
}) => {
  const snackbar = React.useRef<SnackbarHandle>(null);

  const [messages, setMessages] = React.useState<any[]>([]);
  const [isFinished, setFinished] = React.useState<boolean>(true);

  const colors = React.useMemo(() => {
    const messageType = messages[0]?.type ?? MessageTypes.DEFAULT;
    const messageColors = colorPalette ?? Colors;

    return new MessageType(messageType, messageColors).getColors();
  }, [colorPalette, messages]);

  const removeMessage = React.useCallback(() => {
    setMessages((currentMessages) => {
      return currentMessages.filter((_message, index) => index !== 0);
    });

    setFinished(true);
  }, []);

  const showMessage = React.useCallback((config) => {
    setMessages((currentMessages) => [...currentMessages, config]);
  }, []);

  const hideMessage = React.useCallback(() => {
    snackbar.current?.hideMessage();
  }, []);

  React.useEffect(() => {
    if (messages.length && isFinished) {
      setFinished(false);
      snackbar.current?.showMessage(messages[0]);
    }
  }, [isFinished, messages]);

  return (
    <SnackbarContext.Provider value={{ showMessage, hideMessage: hideMessage }}>
      {children}
      <Snackbar
        {...props}
        ref={snackbar}
        defaultDuration={duration}
        defaultAnimation={animation}
        defaultPosition={position}
        backgroundColor={colors.backgroundColor}
        textColor={colors.textColor}
        spaces={spaces}
        customAnimation={customAnimation}
        onHide={removeMessage}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
