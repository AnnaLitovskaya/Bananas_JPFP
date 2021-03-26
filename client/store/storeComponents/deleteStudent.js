import axios from 'axios';
import { getStudents } from './getStudents';

const DELETE_STUDENT = 'DELETE_STUDENT';

const deleteStudent = (studentId, history) => {
  return async (dispatch) => {
    try {
      const deletedStudent = (await axios.delete(`/api/students/${studentId}`))
        .data;
      dispatch(_deleteStudent(deletedStudent));
      dispatch(getStudents());
      history.push('/students');
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

export { deleteStudent, DELETE_STUDENT };
