import axios from 'axios';

const SINGLE_CAMPUS = 'SINGLE_CAMPUS';

const singleCampus = (id) => {
  return async (dispatch) => {
    try {
      const campus = (await axios.get(`/api/campuses/${id}`)).data;
      dispatch(_singleCampus(campus));
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _singleCampus = (campus) => {
  return {
    type: SINGLE_CAMPUS,
    campus,
  };
};

export { singleCampus, SINGLE_CAMPUS };
