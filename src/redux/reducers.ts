import { reducer as appReducer } from './app-reducer/reducer';

// Add all reducers with an partition name
export let allReducers = { application: appReducer };
