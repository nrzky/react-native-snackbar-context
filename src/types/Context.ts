import type { AnimationType } from './Animations';
import type {
  CustomAnimation,
  SnackbarPositionType,
  SnackbarSpacesType,
} from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps {
  duration?: number;
  animation?: AnimationType;
  position?: SnackbarPositionType;
  spaces?: SnackbarSpacesType;
  colorPalette?: ColorPalette;
  customAnimation?: CustomAnimation;
}
