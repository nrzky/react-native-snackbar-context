import type { AnimationType } from './Animations';
import type { SnackbarProps } from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps {
  duration?: number;
  animation?: AnimationType;
  spaces?: SnackbarProps['spaces'];
  colorPalette?: ColorPalette;
}
