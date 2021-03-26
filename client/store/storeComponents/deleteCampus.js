import axios from 'axios';
import { getCampuses } from './getCampuses';

const DELETE_CAMPUS = 'DELETE_CAMPUS';

const deleteCampus = (campusId, history) => {
  return async (dispatch) => {
    try {
      const deletedCampus = (await axios.delete(`/api/campuses/${campusId}`))
        .data;
      dispatch(_deleteCampus(deletedCampus));
      dispatch(getCampuses());
      history.push('/campuses');
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

export { deleteCampus, DELETE_CAMPUS };
