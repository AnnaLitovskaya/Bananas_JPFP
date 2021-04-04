const { DataTypes } = require('Sequelize');
const db = require('./db');

const Campus = db.define('Campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: DataTypes.STRING,
    defaultValue: 'https://picsum.photos/id/101/400',
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  zipCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  addressExtended: {
    type: DataTypes.STRING,
    get() {
      return `${this.city}, ${this.state} ${this.zipCode}`
    }
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Campus.beforeCreate( (campus) => {
  const randomImage = () => {
    const buildingImageArr = [1029, 1031, 1033, 1040, 1047, 1048, 1054, 1058, 1065,
      1067, 1075, 1076, 1078, 1081, 122, 134, 142, 164, 178, 188, 192, 193, 195,
      214, 221, 234, 236, 238, 240, 274, 283, 288, 289, 290, 299, 308, 315];
    const randomNum = Math.floor(Math.random() * buildingImageArr.length);
    return buildingImageArr[randomNum];
  };
  if(campus.imageURL === ''){
    campus.imageURL = 'https://picsum.photos/id/101/400'
  }
  if(campus.imageURL === 'https://picsum.photos/id/101/400' || campus.imageURL){
    campus.imageURL = campus.imageURL.slice(0, 25) + randomImage() + '/200'
  }
});

module.exports = Campus;
