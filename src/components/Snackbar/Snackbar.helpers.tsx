import { Positions } from '../../constants';
import Animations from '../../animations';

import type {
  AnimationParams,
  AnimationType,
  SnackbarPositionType,
} from '../../types';

export const getSnackbarPosition = (
  currentPosition: SnackbarPositionType,
  position?: SnackbarPositionType
): SnackbarPositionType => {
  if (typeof position === 'undefined') {
    return Positions.BOTTOM;
  }

  return position ?? currentPosition;
};

export const getAnimationStyle = (
  type: AnimationType,
  params: AnimationParams
) => {
  switch (type) {
    case 'fade':
      return Animations.fade(params);
    case 'zoom':
      return Animations.zoom(params);
    case 'slide':
      return Animations.slide(params);
    case 'slide-left':
      return Animations.slideLeft(params);
    case 'slide-right':
      return Animations.slideRight(params);
    case 'flicker':
      return Animations.flicker(params);
    default:
      return {};
  }
};
