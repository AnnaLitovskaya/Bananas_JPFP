import { SINGLE_CAMPUS } from '../storeComponents/singleCampus';
import { CREATE_CAMPUS } from '../storeComponents/createCampus';

const singleCampusReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_CAMPUS: {
      return action.campus;
    }
    case CREATE_CAMPUS: {
      return action.campus;
    }
    default: {
      return state;
    }
  }
};

export default singleCampusReducer;
