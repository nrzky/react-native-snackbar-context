import { Positions } from '../constants';
import type { AnimationParams } from '../types';

const zoom = ({ offset, position, spaces }: AnimationParams) => {
  if (position === Positions.BOTTOM) {
    return {
      transform: [{ scale: offset }],
      bottom: spaces.bottom,
    };
  }

  if (position === Positions.TOP) {
    return {
      transform: [{ scale: offset }],
      top: spaces.top,
    };
  }

  return {};
};

export default zoom;
