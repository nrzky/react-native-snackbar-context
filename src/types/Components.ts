export interface SnackbarProps {
  defaultDuration?: number;
}

export interface SnackbarHandle {
  showMessage: (config: { message: string; duration?: number }) => void;
}
