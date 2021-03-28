import axios from 'axios';

const changeStudentCampus = (student, newCampus, history) => {
  return async () => {
    try {
      await axios.put(`/api/students/${student.id}/newCampus`, newCampus);
      history.go(0);
    } catch (ex) {
      console.log(ex);
    }
  };
};

export { changeStudentCampus };
