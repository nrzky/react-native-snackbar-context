export type MessageType = 'success' | 'info' | 'warning' | 'error' | 'default';

export type ColorPalette = {
  success: { backgroundColor: string; textColor: string };
  info: { backgroundColor: string; textColor: string };
  warning: { backgroundColor: string; textColor: string };
  error: { backgroundColor: string; textColor: string };
  default: { backgroundColor: string; textColor: string };
};
