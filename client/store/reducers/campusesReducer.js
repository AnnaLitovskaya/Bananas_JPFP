import { GET_CAMPUSES } from '../storeComponents/getCampuses';
import { CREATE_CAMPUS } from '../storeComponents/createCampus';

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return [...action.campuses];
    }
    case CREATE_CAMPUS: {
      return [...state, action.campus];
    }
    default: {
      return state;
    }
  }
};

export default campusesReducer;
