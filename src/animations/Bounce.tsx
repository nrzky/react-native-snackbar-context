import { Positions } from '../constants';

import type { AnimationParams } from '../types';

const bounce = ({ offset, position, spaces }: AnimationParams) => {
  if (position === Positions.BOTTOM) {
    return {
      bottom: spaces.bottom,
      opacity: offset,
      transform: [
        {
          scale: offset.interpolate({
            inputRange: [0, 0.1, 0.5, 1],
            outputRange: [0, 0.8, 1.1, 1],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  if (position === Positions.TOP) {
    return {
      top: spaces.top,
      opacity: offset,
      transform: [
        {
          scale: offset.interpolate({
            inputRange: [0, 0.1, 0.5, 1],
            outputRange: [0, 0.8, 1.1, 1],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  return {};
};

export default bounce;
