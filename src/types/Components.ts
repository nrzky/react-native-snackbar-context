import type { TouchableOpacityProps } from 'react-native';

export interface SnackbarProps {
  defaultDuration?: number;
}

export interface SnackbarHandle {
  showMessage: (config: {
    message: string;
    duration?: number;
    actions?: ActionButtonProps[];
  }) => void;
}

export interface ActionButtonProps extends TouchableOpacityProps {
  title: string;
}
