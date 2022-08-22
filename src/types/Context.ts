import type { AnimationType } from './Animations';
import type { SnackbarSpacesType } from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps {
  duration?: number;
  animation?: AnimationType;
  spaces?: SnackbarSpacesType;
  colorPalette?: ColorPalette;
}
