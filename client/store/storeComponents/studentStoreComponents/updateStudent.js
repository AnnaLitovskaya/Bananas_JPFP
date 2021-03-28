import axios from 'axios';

const UPDATE_STUDENT = 'UPDATE_STUDENT';

const updateStudent = (student, history) => {
  return async (dispatch) => {
    try {
      const updatedStudent = (
        await axios.put(`/api/students/${student.id}`, student)
      ).data;
      dispatch(_updateStudent(updatedStudent));
      if (history) {
        history.push(`/students/${student.id}`);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

export { updateStudent, UPDATE_STUDENT };
