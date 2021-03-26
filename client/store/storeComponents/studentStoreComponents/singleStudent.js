import axios from 'axios';

const SINGLE_STUDENT = 'SINGLE_STUDENT';

const singleStudent = (id) => {
  return async (dispatch) => {
    try {
      const student = (await axios.get(`/api/students/${id}`)).data;
      dispatch(_singleStudent(student));
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _singleStudent = (student) => {
  return {
    type: SINGLE_STUDENT,
    student,
  };
};

export { singleStudent, SINGLE_STUDENT };
