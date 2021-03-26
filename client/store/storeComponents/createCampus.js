import axios from 'axios';

const CREATE_CAMPUS = 'CREATE_CAMPUS';

const createCampus = (campus, history) => {
  return async (dispatch) => {
    try {
      const newCampus = (await axios.post('/api/campuses/addCampus', campus))
        .data;
      dispatch(_createCampus(newCampus));
      history.push('/campuses');
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus,
  };
};

export { createCampus, CREATE_CAMPUS };
