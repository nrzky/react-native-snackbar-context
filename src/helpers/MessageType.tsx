import type {
  MessageType as SnackbarMessageType,
  ColorPalette,
} from '../types';

export default class MessageType {
  private messageType: SnackbarMessageType;
  private colorPalette: ColorPalette;

  constructor(messageType: SnackbarMessageType, colorPalette: ColorPalette) {
    this.messageType = messageType;
    this.colorPalette = colorPalette;
  }

  public getColors = () => {
    return this.colorPalette[this.messageType];
  };
}
