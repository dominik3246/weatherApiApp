import { combineReducers } from 'redux';

import weather from './weatherReducer.jsx';

export default combineReducers({
  weather,
})