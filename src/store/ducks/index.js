import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as layout } from './layout';

const reducers = combineReducers({
  layout,
  auth,
});

export default reducers;
