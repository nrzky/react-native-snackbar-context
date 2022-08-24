import * as React from 'react';
import {
  Text,
  Animated,
  Easing,
  View,
  useWindowDimensions,
} from 'react-native';

import { Animations, Durations, Positions, Spaces } from '../../constants';
import ActionsBar from '../ActionsBar/ActionsBar';
import TimerIndicator from '../TimerIndicator/TimerIndicator';
import styles from './Snackbar.styled';
import { getSnackbarPosition, getAnimationStyle } from './Snackbar.helpers';

import type {
  ActionButtonProps,
  AnimationType,
  ShowMessageFunction,
  SnackbarHandle,
  SnackbarPositionType,
  SnackbarProps,
} from '../../types';

const Snackbar = React.forwardRef<SnackbarHandle, SnackbarProps>(
  (
    {
      defaultDuration = Durations.REGULAR,
      defaultAnimation = Animations.SLIDE,
      style,
      backgroundColor,
      textProps,
      textStyle,
      textColor,
      indicatorStyle,
      spaces = Spaces,
      customAnimation,
      onHide,
      ...props
    },
    ref
  ) => {
    const offset = React.useRef(new Animated.Value(0)).current;
    const timerOffset = React.useRef(new Animated.Value(1)).current;

    const windowDimensions = useWindowDimensions();

    const [animationType, setAnimationType] =
      React.useState<AnimationType>(defaultAnimation);
    const [containerHeight, setContainerHeight] = React.useState<number>(0);
    const [isVisible, setVisible] = React.useState<boolean>(false);
    const [messageText, setMessageText] = React.useState<string>('');
    const [snackbarPosition, setSnackbarPosition] =
      React.useState<SnackbarPositionType>(Positions.BOTTOM);
    const [snackbarActions, setSnackbarActions] = React.useState<
      ActionButtonProps[] | undefined
    >();

    const handleTimerAnimation = React.useCallback(
      (duration?: number) => {
        timerOffset.setValue(1);

        Animated.timing(timerOffset, {
          toValue: 0,
          duration: (duration ?? defaultDuration) - 50,
          delay: 50,
          easing: Easing.linear,
          useNativeDriver: true,
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
          delay: 200,
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

    const handleShowMessage: ShowMessageFunction = React.useCallback(
      ({
        message,
        duration,
        position,
        animation = defaultAnimation,
        actions,
      }) => {
        setSnackbarPosition((currentPosition) => {
          return getSnackbarPosition(currentPosition, position);
        });

        setSnackbarActions(actions);
        setMessageText(message);
        setAnimationType(animation);
        handleSnackbarTimer(duration);
      },
      [defaultAnimation, handleSnackbarTimer]
    );

    const handleHideMessage = React.useCallback(() => {
      handleOutAnimation(0);
    }, [handleOutAnimation]);

    const baseSnackbarStyle = React.useMemo(() => {
      return {
        left: spaces.left,
        right: spaces.right,
        backgroundColor: backgroundColor,
      };
    }, [backgroundColor, spaces.left, spaces.right]);

    const animationParams = React.useMemo(() => {
      return {
        containerHeight,
        windowDimensions: windowDimensions,
        offset: offset,
        position: snackbarPosition,
        spaces: spaces,
      };
    }, [containerHeight, offset, snackbarPosition, spaces, windowDimensions]);

    const snackbarStyle = React.useMemo(() => {
      if (animationType === Animations.CUSTOM && customAnimation) {
        return customAnimation(animationParams);
      }

      return getAnimationStyle(animationType, animationParams);
    }, [animationParams, animationType, customAnimation]);

    React.useImperativeHandle(ref, () => ({
      showMessage: handleShowMessage,
      hideMessage: handleHideMessage,
    }));

    if (!isVisible) {
      return null;
    }

    return (
      <Animated.View
        style={[styles.container, baseSnackbarStyle, snackbarStyle, style]}
        onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
        {...props}
      >
        <View style={styles.content}>
          <Text
            style={[styles.messageText, { color: textColor }, textStyle]}
            {...textProps}
          >
            {messageText}
          </Text>
          <ActionsBar actions={snackbarActions} textColor={textColor} />
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
