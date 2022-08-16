export type MessageType = 'success' | 'info' | 'warning' | 'error';

export type ColorPalette = {
  success: { backgroundColor: string; textColor: string };
  info: { backgroundColor: string; textColor: string };
  warning: { backgroundColor: string; textColor: string };
  error: { backgroundColor: string; textColor: string };
};
