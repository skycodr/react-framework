import { ReduxAction } from '../../types';
import { ActionCreator } from 'redux';

export const NAVIGATE_TO: string = 'NavigateTo';

// Define your app actions here
interface NavigateToAction extends ReduxAction<string> {
  type: typeof NAVIGATE_TO;
  payload: string;
}

// Export the action type
export type AppActionType = NavigateToAction;

// Export the action creators
export const navigateTo: ActionCreator<AppActionType> = (
  value: string,
): NavigateToAction => ({ type: NAVIGATE_TO, payload: value });
