import * as React from 'react';
import { Text, Animated, Easing } from 'react-native';

import ActionButton from '../ActionButton/ActionButton';
import styles from './Snackbar.styled';

import type {
  ActionButtonProps,
  SnackbarHandle,
  SnackbarProps,
} from '../../types';

const Snackbar = React.forwardRef<SnackbarHandle, SnackbarProps>(
  ({ defaultDuration = 3000 }, ref) => {
    const offset = React.useRef(new Animated.Value(0)).current;

    const [isVisible, setVisible] = React.useState<boolean>(false);
    const [messageText, setMessageText] = React.useState<string>('');
    const [snackbarActions, setSnackbarActions] = React.useState<
      ActionButtonProps[] | undefined
    >();

    const handleOutAnimation = React.useCallback(
      (duration?: number) => {
        Animated.timing(offset, {
          toValue: 0,
          duration: 200,
          delay: duration ?? defaultDuration,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start(({ finished }) => {
          if (finished) {
            setVisible(false);
          }
        });
      },
      [defaultDuration, offset]
    );

    const handleInAnimation = React.useCallback(
      (duration?: number) => {
        setVisible(true);
        Animated.timing(offset, {
          toValue: 1,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start(({ finished }) => {
          if (finished) {
            handleOutAnimation(duration);
          }
        });
      },
      [handleOutAnimation, offset]
    );

    const handleSnackbarTimer = React.useCallback(
      (duration?: number) => {
        handleInAnimation(duration);
      },
      [handleInAnimation]
    );

    const handleShowMessage = React.useCallback(
      ({
        message,
        duration,
        actions,
      }: {
        message: string;
        duration?: number;
        actions?: ActionButtonProps[];
      }) => {
        setSnackbarActions(actions);
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
      <Animated.View
        style={[
          styles.container,
          {
            bottom: offset.interpolate({
              inputRange: [0, 1],
              outputRange: [-50, 50],
            }),
          },
        ]}
      >
        <Text style={styles.messageText}>{messageText}</Text>
        {snackbarActions?.map((action, index) => (
          <ActionButton key={index.toString()} {...action} />
        ))}
      </Animated.View>
    );
  }
);

export default Snackbar;
