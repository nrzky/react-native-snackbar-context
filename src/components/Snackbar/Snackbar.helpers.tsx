import { Position } from '../../constants';

import type { SnackbarPositionType } from '../../types';

export const getSnackbarPosition = (
  currentPosition: SnackbarPositionType,
  position?: SnackbarPositionType
): SnackbarPositionType => {
  if (typeof position === 'undefined') {
    return Position.BOTTOM;
  }

  return position ?? currentPosition;
};
