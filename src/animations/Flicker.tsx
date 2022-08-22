import { Positions } from '../constants';

import type { AnimationParams } from '../types';

const flicker = ({ offset, position, spaces }: AnimationParams) => {
  if (position === Positions.BOTTOM) {
    return {
      bottom: spaces.bottom,
      opacity: offset,
      transform: [
        {
          rotate: offset.interpolate({
            inputRange: [0, 0.3, 0.9, 1],
            outputRange: ['0deg', '5deg', '-5deg', '0deg'],
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
          rotate: offset.interpolate({
            inputRange: [0, 0.3, 0.9, 1],
            outputRange: ['0deg', '5deg', '-5deg', '0deg'],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  return {};
};

export default flicker;
