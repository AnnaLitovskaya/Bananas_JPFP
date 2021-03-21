import { GET_CAMPUSES } from '../constants';

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return [...action.campuses];
    }
    default: {
      return state;
    }
  }
};

export default campusReducer;
