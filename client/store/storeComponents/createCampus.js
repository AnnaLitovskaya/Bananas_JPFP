import axios from 'axios';
import { getCampuses } from './getCampuses';

const CREATE_CAMPUS = 'CREATE_CAMPUS';

const createCampus = (newCampus, history) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/campuses/addCampus', newCampus);
      dispatch(getCampuses());
      history.push('/campuses');
    } catch (ex) {
      console.log(ex);
    }
  };
};

export { createCampus, CREATE_CAMPUS };
