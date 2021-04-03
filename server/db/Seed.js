const { Student, Campus } = require('./associations');
const db = require('./db');
const faker = require('faker');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    // Generating school data
    let schools = Array(25).fill('');
    schools = schools.map((spot) => {
      return {
        name: `${faker.address.city()} University`,
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode().slice(0, 5),
        description: faker.lorem.paragraphs(3),
      };
    });
    await schools.map((school) => {
      Campus.create({
        name: school.name,
        address: school.address,
        city: school.city,
        state: school.state,
        zipCode: school.zipCode,
        description: school.description,
      });
    });

    //Generating student data
    let students = Array(75).fill('');
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
