import type {
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
  Animated,
} from 'react-native';
import type { AnimationType } from './Animations';
import type { MessageType } from './Helpers';

export interface SnackbarProps extends ViewProps {
  defaultDuration?: number;
  defaultAnimation?: AnimationType;
  backgroundColor?: string;
  textColor?: string;
  textProps?: TextProps;
  textStyle?: TextStyle;
  indicatorStyle?: ViewStyle;
  spaces?: SnackbarSpacesType;
  onHide?: (duration: number) => void;
}

export interface SnackbarHandle {
  showMessage: (config: {
    message: string;
    duration?: number;
    type?: MessageType;
    actions?: ActionButtonProps[];
    position?: SnackbarPositionType;
    animation?: AnimationType;
  }) => void;
  hideMessage: () => void;
}

export interface ActionButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface TimerIndicatorProps extends ViewProps {
  offset: Animated.Value;
  tintColor?: string;
}

export interface ActionsBarProps {
  actions?: ActionButtonProps[];
  textColor?: string;
}

export type SnackbarPositionType = 'top' | 'bottom';

export type SnackbarSpacesType = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};
