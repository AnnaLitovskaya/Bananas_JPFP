import axios from 'axios';
import { _getCampuses, _getStudents } from './actions';

const getCampuses = () => {
  return async (dispatch) => {
    const campuses = (await axios.get('/api/campuses')).data;
    dispatch(_getCampuses(campuses));
  };
};

const getStudents = () => {
  return async (dispatch) => {
    const students = (await axios.get('/api/students')).data;
    dispatch(_getStudents(students));
  };
};

export { getCampuses, getStudents };
