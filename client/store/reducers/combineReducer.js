import studentsReducer from './studentsReducer';
import singleStudentReducer from './singleStudentReducer';
import campusesReducer from './campusesReducer';
import singleCampusReducer from './singleCampusReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  students: studentsReducer,
  student: singleStudentReducer,
  campuses: campusesReducer,
  campus: singleCampusReducer,
});

export default rootReducer;
