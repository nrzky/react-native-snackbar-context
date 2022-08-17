import * as React from 'react';
import {
  Text,
  Animated,
  Easing,
  View,
  useWindowDimensions,
} from 'react-native';

import { Spaces } from '../../constants';
import ActionButton from '../ActionButton/ActionButton';
import TimerIndicator from '../TimerIndicator/TimerIndicator';
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
      indicatorStyle,
      spaces = Spaces,
      onHide,
      ...props
    },
    ref
  ) => {
    const offset = React.useRef(new Animated.Value(0)).current;
    const timerOffset = React.useRef(new Animated.Value(1)).current;

    const { height } = useWindowDimensions();

    const [containerHeight, setContainerHeight] = React.useState<number>(0);
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
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      },
      [defaultDuration, timerOffset]
    );

    const handleOutAnimation = React.useCallback(
      (duration?: number) => {
        Animated.timing(offset, {
          toValue: 0,
          duration: 100,
          delay: duration ?? defaultDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(({ finished }) => {
          if (finished) {
            setVisible(false);
            onHide && onHide(duration ?? defaultDuration);
          }
        });
      },
      [defaultDuration, offset, onHide]
    );

    const handleInAnimation = React.useCallback(
      (duration?: number) => {
        setVisible(true);
        Animated.timing(offset, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
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
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  height + spaces.bottom,
                  height - spaces.bottom - containerHeight,
                ],
              }),
            },
          ],
        };
      }

      if (snackbarPosition === 'top') {
        return {
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 1],
                outputRange: [-spaces.top, spaces.top],
              }),
            },
          ],
        };
      }

      return {};
    }, [
      containerHeight,
      height,
      offset,
      snackbarPosition,
      spaces.bottom,
      spaces.top,
    ]);

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
          {
            left: spaces.left,
            right: spaces.right,
            backgroundColor: backgroundColor,
          },
          style,
        ]}
        onLayout={(event) =>
          setContainerHeight(event.nativeEvent.layout.height)
        }
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
            <ActionButton
              key={index.toString()}
              backgroundColor={backgroundColor}
              textColor={textColor}
              {...action}
            />
          ))}
        </View>
        <TimerIndicator
          style={indicatorStyle}
          offset={timerOffset}
          tintColor={textColor}
        />
      </Animated.View>
    );
  }
);

export default Snackbar;
