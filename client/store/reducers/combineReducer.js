import studentReducer from './studentReducer';
import campusReducer from './campusReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
});

export default rootReducer;
