import { GET_CAMPUSES } from '../storeComponents/getCampuses';

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return [...action.campuses];
    }
    default: {
      return state;
    }
  }
};

export default campusesReducer;
