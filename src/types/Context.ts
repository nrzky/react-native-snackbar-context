import type { AnimationType } from './Animations';
import type { SnackbarPositionType } from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps {
  duration?: number;
  animation?: AnimationType;
  spaces?: SnackbarPositionType;
  colorPalette?: ColorPalette;
}
