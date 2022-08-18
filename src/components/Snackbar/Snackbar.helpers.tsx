import { Positions } from '../../constants';

import type { SnackbarPositionType } from '../../types';

export const getSnackbarPosition = (
  currentPosition: SnackbarPositionType,
  position?: SnackbarPositionType
): SnackbarPositionType => {
  if (typeof position === 'undefined') {
    return Positions.BOTTOM;
  }

  return position ?? currentPosition;
};
