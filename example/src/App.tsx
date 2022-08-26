import * as React from 'react';
import {
  CustomAnimation,
  SnackbarAnimations,
  SnackbarPositions,
  SnackbarProvider,
} from 'react-native-snackbar-context';

import MainPage from './components/MainPage';

const App = () => {
  return (
    <SnackbarProvider
      animation={SnackbarAnimations.CUSTOM}
      position={SnackbarPositions.TOP}
      customAnimation={ScaleXAnimation}
    >
      <MainPage />
    </SnackbarProvider>
  );
};

export default App;

const ScaleXAnimation: CustomAnimation = (params) => {
  if (params.position === SnackbarPositions.TOP) {
    return {
      top: params.spaces.top,
      opacity: params.offset.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [0, 0, 1],
      }),
      transform: [
        {
          scaleX: params.offset.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
    };
  }

  if (params.position === SnackbarPositions.BOTTOM) {
    return {
      bottom: params.spaces.bottom,
      opacity: params.offset.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [0, 0, 1],
      }),
      transform: [
        {
          scaleX: params.offset.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
    };
  }

  return {};
};
