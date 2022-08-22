import type { Animated } from 'react-native';
import type { SnackbarPositionType } from './Components';

export type AnimationType =
  | 'bounce'
  | 'fade'
  | 'zoom'
  | 'slide'
  | 'slide-left'
  | 'slide-right'
  | 'flicker';

export interface AnimationParams {
  offset: Animated.Value;
  containerHeight: number;
  position: SnackbarPositionType;
  windowDimensions: { height: number; width: number };
  spaces: { top: number; bottom: number; left: number; right: number };
}
