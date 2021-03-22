import studentsReducer from './studentsReducer';
import campusesReducer from './campusesReducer';
import singleCampusReducer from './singleCampusReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
  campus: singleCampusReducer,
});

export default rootReducer;
