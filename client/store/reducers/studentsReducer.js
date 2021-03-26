import { GET_STUDENTS } from '../storeComponents/studentStoreComponents/getStudents';
import { CREATE_STUDENT } from '../storeComponents/studentStoreComponents/createStudent';
import { DELETE_STUDENT } from '../storeComponents/studentStoreComponents/deleteStudent';

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS: {
      return [...action.students];
    }
    case CREATE_STUDENT: {
      return [...state, action.student];
    }
    case DELETE_STUDENT: {
      const newState = state.filter((student) => {
        if (student.id !== action.student.id) {
          return student;
        }
      });
      return [...newState];
    }
    default: {
      return state;
    }
  }
};

export default studentsReducer;
