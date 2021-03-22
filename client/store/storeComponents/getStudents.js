import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';

const getStudents = () => {
  return async (dispatch) => {
    try {
      const students = (await axios.get('/api/students')).data;
      dispatch(_getStudents(students));
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students,
  };
};

export { GET_STUDENTS, getStudents };
