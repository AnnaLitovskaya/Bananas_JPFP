const { DataTypes } = require('sequelize');
const db = require('./db');

const Student = db.define('Student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageURL: {
    type: DataTypes.STRING,
    defaultValue: 'https://picsum.photos/id/1005/200',
  },
  gpa: {
    type: DataTypes.FLOAT,
  },
});

Student.beforeCreate( (student) => {
  const randomImage = () => {
    const peopleImageArr = [1, 1001, 1005, 1006, 1009, 1011, 1012, 1013, 1014, 1025,
    1027, 1035, 1074, 1083, 129, 177, 203, 22, 27, 319, 325, 334, 338, 342, 349, 399,
    433, 447, 455, 473, 497, 5, 505, 548, 550, 602, 604, 628, 633, 64, 646, 65, 656,
    660, 661, 662, 665, 669, 680, 685, 728, 768, 770, 777, 778, 783, 786, 804, 821,
    822, 823, 832, 836, 838, 839, 841, 856, 863, 874, 883, 91, 996];
    const randomNum = Math.floor(Math.random() * peopleImageArr.length);
    return peopleImageArr[randomNum];
  };
  if(student.imageURL === ''){
    student.imageURL = 'https://picsum.photos/id/1005/200'
  }
  if(student.imageURL === 'https://picsum.photos/id/1005/200'){
    student.imageURL = student.imageURL.slice(0, 25) + randomImage() + '/200'
  }
});

module.exports = Student;
