import type { SnackbarProps } from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps
  extends Omit<SnackbarProps, 'defaultDuration'> {
  duration?: number;
  colorPalette?: ColorPalette;
}
