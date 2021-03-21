import { GET_CAMPUSES, GET_STUDENTS } from './constants';

const _getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses,
  };
};

const _getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students,
  };
};

export { _getCampuses, _getStudents };
