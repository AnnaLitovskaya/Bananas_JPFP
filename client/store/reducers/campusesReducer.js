import { GET_CAMPUSES } from '../storeComponents/campusStoreComponents/getCampuses';
import { CREATE_CAMPUS } from '../storeComponents/campusStoreComponents/createCampus';
import { DELETE_CAMPUS } from '../storeComponents/campusStoreComponents/deleteCampus';
import { UPDATE_CAMPUS } from '../storeComponents/campusStoreComponents/updateCampus';

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
    case UPDATE_CAMPUS: {
      const newState = state.filter((campus) => {
        if (campus.id !== action.campus.id) {
          return campus;
        } else {
          return action.campus;
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
