import { createStore, combineReducers } from 'redux';
import * as Actions from './actions';
import { allReducers } from './reducers';
// import { reducer as appReducer } from './app-reducer/reducer';

console.log('app', allReducers)
const rootReducer = combineReducers(allReducers);
// const rootReducer = combineReducers({ application: appReducer });
const store = createStore(rootReducer);

export type ApplicationState = ReturnType<typeof rootReducer>;
export { Actions };
export default store;
