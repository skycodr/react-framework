import { PAGE } from '../../enums';

import { AppState } from './state';
import { AppActionType, NAVIGATE_TO } from './actions';

const initialState: AppState = {
  currentPage: PAGE.ONE,
};

export const reducer = (
  state: AppState = initialState,
  action: AppActionType,
): AppState => {
  let _appState: AppState = state;
  switch (action.type) {
    case NAVIGATE_TO:
      _appState = {
        ...state,
        previousPage: state.currentPage,
        currentPage: action.payload,
      };
      break;
    default:
      _appState = state;
  }

  return _appState;
};
