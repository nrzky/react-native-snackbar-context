import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './ActionButton.styled';

import type { ActionButtonProps } from '../../types';

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  backgroundColor,
  textColor,
  textProps,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      {...props}
    >
      <Text
        {...textProps}
        style={[styles.titleText, { color: textColor }, textStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
