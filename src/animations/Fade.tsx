import { Positions } from '../constants';

import type { ViewProps } from 'react-native';
import type { AnimationParams } from '../types';

const fade = ({
  offset,
  position,
  spaces,
}: AnimationParams): ViewProps | object => {
  if (position === Positions.BOTTOM) {
    return {
      opacity: offset,
      bottom: spaces.bottom,
    };
  }

  if (position === Positions.TOP) {
    return {
      opacity: offset,
      top: spaces.top,
    };
  }

  return {};
};

export default fade;
