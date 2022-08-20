import type { Animated } from 'react-native';
import type { SnackbarPositionType } from './Components';

export type AnimationType = 'slide' | 'fade';

export interface AnimationParams {
  offset: Animated.Value;
  containerHeight: number;
  position: SnackbarPositionType;
  windowDimensions: { height: number; width: number };
  spaces: { top: number; bottom: number; left: number; right: number };
}
