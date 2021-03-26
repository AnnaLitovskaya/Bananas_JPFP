import { GET_STUDENTS } from '../storeComponents/getStudents';
import { CREATE_STUDENT } from '../storeComponents/createStudent';

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS: {
      return [...action.students];
    }
    case CREATE_STUDENT: {
      return [...state, action.student];
    }
    default: {
      return state;
    }
  }
};

export default studentsReducer;
