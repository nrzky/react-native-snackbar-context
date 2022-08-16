import type { SnackbarProps } from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps {
  duration?: number;
  spaces?: SnackbarProps['spaces'];
  colorPalette?: ColorPalette;
}
