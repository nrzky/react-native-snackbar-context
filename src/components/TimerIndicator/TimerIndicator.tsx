import * as React from 'react';
import { Animated } from 'react-native';

import styles from './TimerIndicator.styled';

import type { TimerIndicatorProps } from '../../types';

const TimerIndicator: React.FC<TimerIndicatorProps> = ({
  style,
  offset,
  tintColor,
}) => {
  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: tintColor,
          transform: [{ scaleX: offset }],
        },
        style,
      ]}
    />
  );
};

export default TimerIndicator;
