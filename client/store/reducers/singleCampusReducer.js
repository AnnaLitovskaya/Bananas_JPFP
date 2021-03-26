import { SINGLE_CAMPUS } from '../storeComponents/singleCampus';

const singleCampusReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_CAMPUS: {
      return action.campus;
    }
    default: {
      return state;
    }
  }
};

export default singleCampusReducer;
