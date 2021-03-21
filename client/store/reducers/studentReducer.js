import { GET_STUDENTS } from '../constants';

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS: {
      return [...action.students];
    }
    default: {
      return state;
    }
  }
};

export default studentReducer;
