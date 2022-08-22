export type MessageType = 'success' | 'info' | 'warning' | 'error' | 'default';

export type MesssageTypeColor = { backgroundColor: string; textColor: string };

export type ColorPalette = {
  success: MesssageTypeColor;
  info: MesssageTypeColor;
  warning: MesssageTypeColor;
  error: MesssageTypeColor;
  default: MesssageTypeColor;
};
