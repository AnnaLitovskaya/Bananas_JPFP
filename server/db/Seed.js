const { Student, Campus } = require('./Index');
const db = require('./db');
const faker = require('faker');

const syncAndSeed = async () => {
  try {
    // Generates an array with 20 schools
    await db.sync({ force: true });
    let schools = Array(20).fill('');
    schools = schools.map((spot) => {
      return {
        name: `${faker.address.city()} University`,
        address: faker.address.streetAddress(),
        description: faker.lorem.paragraphs(5),
      };
    });
    await schools.map((school) => {
      Campus.create({
        name: school.name,
        address: school.address,
        description: school.description,
      });
    });
    //Generates an array with 1000 students
    let students = Array(1000).fill('');
    students = students.map((student) => {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        gpa: Math.floor(Math.random() * 41) / 10,
      };
    });
    await students.map((student) => {
      Student.create({
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        gpa: student.gpa,
        CampusId: Math.floor(Math.random() * schools.length + 1),
      });
    });
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = syncAndSeed;
