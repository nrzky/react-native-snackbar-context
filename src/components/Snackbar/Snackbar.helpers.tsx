import { Positions, Animations as SnackbarAnimations } from '../../constants';
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
    case SnackbarAnimations.BOUNCE:
      return Animations.bounce(params);
    case SnackbarAnimations.FADE:
      return Animations.fade(params);
    case SnackbarAnimations.ZOOM:
      return Animations.zoom(params);
    case SnackbarAnimations.ZOOM:
      return Animations.slide(params);
    case SnackbarAnimations.SLIDE_LEFT:
      return Animations.slideLeft(params);
    case SnackbarAnimations.SLIDE_RIGHT:
      return Animations.slideRight(params);
    case SnackbarAnimations.FLICKER:
      return Animations.flicker(params);
    case SnackbarAnimations.CUSTOM:
      return Animations.slide(params);
    default:
      return {};
  }
};
