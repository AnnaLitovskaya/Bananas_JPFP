const { Student, Campus } = require('./associations');
const db = require('./db');
const faker = require('faker');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    // Generating school data
    let schools = Array(6).fill('');
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

    //Generating student data
    let students = Array(20).fill('');
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
        CampusId: schools.length
          ? Math.floor(Math.random() * schools.length + 1)
          : null,
      });
    });
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = syncAndSeed;
