import { Positions } from '../constants';

import type { ViewProps } from 'react-native';
import type { AnimationParams } from '../types';

const slideLeft = ({
  offset,
  windowDimensions,
  position,
  spaces,
}: AnimationParams): ViewProps | object => {
  const { width } = windowDimensions;

  if (position === Positions.BOTTOM) {
    return {
      bottom: spaces.bottom,
      transform: [
        {
          translateX: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [-width - 50, 0],
          }),
        },
      ],
    };
  }

  if (position === Positions.TOP) {
    return {
      top: spaces.top,
      transform: [
        {
          translateX: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [-width - 50, 0],
          }),
        },
      ],
    };
  }

  return {};
};

export default slideLeft;
