import * as React from 'react';
import { Text, Animated, Easing, View } from 'react-native';

import ActionButton from '../ActionButton/ActionButton';
import styles from './Snackbar.styled';

import type {
  ActionButtonProps,
  SnackbarHandle,
  SnackbarProps,
} from '../../types';

const Snackbar = React.forwardRef<SnackbarHandle, SnackbarProps>(
  (
    {
      defaultDuration = 3000,
      style,
      backgroundColor,
      textProps,
      textStyle,
      textColor,
      ...props
    },
    ref
  ) => {
    const offset = React.useRef(new Animated.Value(0)).current;
    const timerOffset = React.useRef(new Animated.Value(1)).current;

    const [isVisible, setVisible] = React.useState<boolean>(false);
    const [messageText, setMessageText] = React.useState<string>('');
    const [snackbarPosition, setSnackbarPosition] = React.useState<
      'top' | 'bottom'
    >('bottom');
    const [snackbarActions, setSnackbarActions] = React.useState<
      ActionButtonProps[] | undefined
    >();

    const handleTimerAnimation = React.useCallback(
      (duration?: number) => {
        timerOffset.setValue(1);

        Animated.timing(timerOffset, {
          toValue: 0,
          duration: duration ?? defaultDuration,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
      },
      [defaultDuration, timerOffset]
    );

    const handleOutAnimation = React.useCallback(
      (duration?: number) => {
        Animated.timing(offset, {
          toValue: 0,
          duration: 150,
          delay: duration ?? defaultDuration,
          easing: Easing.linear,
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
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start(({ finished }) => {
          handleTimerAnimation(duration);

          if (finished) {
            handleOutAnimation(duration);
          }
        });
      },
      [handleOutAnimation, handleTimerAnimation, offset]
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
        position,
        actions,
      }: {
        message: string;
        duration?: number;
        position?: 'top' | 'bottom';
        actions?: ActionButtonProps[];
      }) => {
        setSnackbarPosition((currentPosition) => position ?? currentPosition);
        setSnackbarActions(actions);
        setMessageText(message);
        handleSnackbarTimer(duration);
      },
      [handleSnackbarTimer]
    );

    const handleHideMessage = React.useCallback(() => {
      handleOutAnimation(0);
    }, [handleOutAnimation]);

    const snackbarStyle = React.useMemo(() => {
      if (snackbarPosition === 'bottom') {
        return {
          bottom: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 50],
          }),
        };
      }

      if (snackbarPosition === 'top') {
        return {
          top: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 50],
          }),
        };
      }

      return {};
    }, [offset, snackbarPosition]);

    React.useImperativeHandle(ref, () => ({
      showMessage: handleShowMessage,
      hideMessage: handleHideMessage,
    }));

    if (!isVisible) {
      return null;
    }

    return (
      <Animated.View
        style={[
          styles.container,
          snackbarStyle,
          { backgroundColor: backgroundColor },
          style,
        ]}
        {...props}
      >
        <View style={styles.content}>
          <Text
            style={[styles.messageText, { color: textColor }, textStyle]}
            {...textProps}
          >
            {messageText}
          </Text>
          {snackbarActions?.map((action, index) => (
            <ActionButton key={index.toString()} {...action} />
          ))}
        </View>
        <Animated.View
          style={{
            ...styles.timerIndicatorView,
            width: timerOffset.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </Animated.View>
    );
  }
);

export default Snackbar;
