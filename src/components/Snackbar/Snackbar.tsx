import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './Snackbar.styled';

import type { SnackbarHandle, SnackbarProps } from '../../types';

const Snackbar = React.forwardRef<SnackbarHandle, SnackbarProps>(
  ({ defaultDuration = 3000 }, ref) => {
    const [isVisible, setVisible] = React.useState<boolean>(false);
    const [messageText, setMessageText] = React.useState<string>('');

    const handleSnackbarTimer = React.useCallback(
      (duration?: number) => {
        setVisible(true);
        setTimeout(() => setVisible(false), duration ?? defaultDuration);
      },
      [defaultDuration]
    );

    const handleShowMessage = React.useCallback(
      ({ message, duration }: { message: string; duration?: number }) => {
        setMessageText(message);
        handleSnackbarTimer(duration);
      },
      [handleSnackbarTimer]
    );

    React.useImperativeHandle(ref, () => ({
      showMessage: handleShowMessage,
    }));

    if (!isVisible) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.messageText}>{messageText}</Text>
      </View>
    );
  }
);

export default Snackbar;
