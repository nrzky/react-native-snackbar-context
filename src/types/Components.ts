import type {
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
  Animated,
} from 'react-native';
import type { AnimationParams, AnimationType } from './Animations';
import type { MessageType } from './Helpers';

export type CustomAnimation = (params: AnimationParams) => ViewStyle | object;

export interface SnackbarProps extends ViewProps {
  defaultDuration?: number;
  defaultAnimation?: AnimationType;
  defaultPosition?: SnackbarPositionType;
  backgroundColor?: string;
  textColor?: string;
  textProps?: TextProps;
  textStyle?: TextStyle;
  indicatorStyle?: ViewStyle;
  spaces?: SnackbarSpacesType;
  customAnimation?: CustomAnimation;
  onHide?: (duration: number) => void;
}

export type ShowMessageFunction = (config: {
  message: string;
  duration?: number;
  type?: MessageType;
  actions?: ActionButtonProps[];
  position?: SnackbarPositionType;
  animation?: AnimationType;
}) => void;

export interface SnackbarHandle {
  showMessage: ShowMessageFunction;
  hideMessage: () => void;
}

export interface ActionButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  textProps?: TextProps;
  textStyle?: TextStyle;
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
