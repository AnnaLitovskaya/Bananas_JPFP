import axios from 'axios';

const CREATE_STUDENT = 'CREATE_STUDENT';

const createStudent = (student, history) => {
  return async (dispatch) => {
    try {
      const newStudent = (await axios.post('/api/students/addStudent', student))
        .data;
      dispatch(_createStudent(newStudent));
      history.push('/students');
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student,
  };
};

export { createStudent, CREATE_STUDENT };
