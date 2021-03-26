import { SINGLE_STUDENT } from '../storeComponents/studentStoreComponents/singleStudent';

const singleStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_STUDENT: {
      return action.student;
    }
    default: {
      return state;
    }
  }
};

export default singleStudentReducer;
