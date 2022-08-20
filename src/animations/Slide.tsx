import { Positions } from '../constants';

import type { AnimationParams } from '../types';

const slide = ({
  offset,
  windowDimensions,
  containerHeight,
  position,
  spaces,
}: AnimationParams) => {
  const { height } = windowDimensions;

  if (position === Positions.BOTTOM) {
    return {
      transform: [
        {
          translateY: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [
              height + 50,
              height - (spaces.bottom + containerHeight),
            ],
          }),
        },
      ],
    };
  }

  if (position === Positions.TOP) {
    return {
      transform: [
        {
          translateY: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [-(containerHeight + 50), spaces.top],
          }),
        },
      ],
    };
  }

  return {};
};

export default slide;
