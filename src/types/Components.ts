import type {
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { MessageType } from './Helpers';

export interface SnackbarProps extends ViewProps {
  defaultDuration?: number;
  backgroundColor?: string;
  textColor?: string;
  textProps?: TextProps;
  textStyle?: TextStyle;
  indicatorStyle?: ViewStyle;
  onHide?: (duration: number) => void;
}

export interface SnackbarHandle {
  showMessage: (config: {
    message: string;
    duration?: number;
    type?: MessageType;
    actions?: ActionButtonProps[];
    position?: 'top' | 'bottom';
  }) => void;
  hideMessage: () => void;
}

export interface ActionButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
}
