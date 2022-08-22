import type { Animated } from 'react-native';
import type { SnackbarPositionType, SnackbarSpacesType } from './Components';

export type AnimationType =
  | 'bounce'
  | 'fade'
  | 'zoom'
  | 'slide'
  | 'slide-left'
  | 'slide-right'
  | 'flicker'
  | 'custom';

export interface AnimationParams {
  offset: Animated.Value;
  containerHeight: number;
  position: SnackbarPositionType;
  windowDimensions: { height: number; width: number };
  spaces: SnackbarSpacesType;
}
