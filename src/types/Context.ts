import type { SnackbarProps } from './Components';

export interface SnackbarProviderProps
  extends Omit<SnackbarProps, 'defaultDuration'> {
  duration?: number;
}
