import type { SnackbarProps } from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps {
  colorPalette?: ColorPalette;
  customAnimation?: CustomAnimation;
}
