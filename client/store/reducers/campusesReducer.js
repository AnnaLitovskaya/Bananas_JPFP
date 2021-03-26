import { GET_CAMPUSES } from '../storeComponents/getCampuses';
import { CREATE_CAMPUS } from '../storeComponents/createCampus';
import { DELETE_CAMPUS } from '../storeComponents/deleteCampus';

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return [...action.campuses];
    }
    case CREATE_CAMPUS: {
      return [...state, action.campus];
    }
    case DELETE_CAMPUS: {
      const newState = state.filter((campus) => {
        if (campus.id !== action.campus.id) {
          return campus;
        }
      });
      return [...newState];
    }
    default: {
      return state;
    }
  }
};

export default campusesReducer;
