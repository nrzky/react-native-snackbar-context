import type { SnackbarProps } from './Components';
import type { ColorPalette } from './Helpers';

export interface SnackbarProviderProps {
  colorPalette?: ColorPalette;
  duration?: SnackbarProps['defaultDuration'];
  animation?: SnackbarProps['defaultAnimation'];
  position?: SnackbarProps['defaultPosition'];
  spaces?: SnackbarProps['spaces'];
  customAnimation?: SnackbarProps['customAnimation'];
  style?: SnackbarProps['style'];
  textProps?: SnackbarProps['textProps'];
  textStyle?: SnackbarProps['textStyle'];
  indicatorStyle?: SnackbarProps['indicatorStyle'];
}
