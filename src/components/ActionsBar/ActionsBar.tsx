import * as React from 'react';
import { View } from 'react-native';

import ActionButton from '../ActionButton/ActionButton';
import styles from './ActionsBar.styled';

import type { ActionsBarProps } from '../../types';

const ActionsBar: React.FC<ActionsBarProps> = ({ actions }) => {
  if (!actions) {
    return null;
  }

  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <ActionButton key={index.toString()} {...action} />
      ))}
    </View>
  );
};

export default ActionsBar;
