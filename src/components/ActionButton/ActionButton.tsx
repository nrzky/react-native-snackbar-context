import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './ActionButton.styled';

import type { ActionButtonProps } from '../../types';

const ActionButton: React.FC<ActionButtonProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
