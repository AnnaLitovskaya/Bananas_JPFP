import axios from 'axios';

const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const updateCampus = (campus, history) => {
  return async (dispatch) => {
    try {
      const updatedCampus = (
        await axios.put(`/api/campuses/${campus.id}`, campus)
      ).data;
      dispatch(_updateCampus(updatedCampus));
      history.push(`/campuses/${campus.id}`);
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus,
  };
};

export { updateCampus, UPDATE_CAMPUS };
