const { Student, Campus } = require('./Index');
const db = require('./db');
const faker = require('faker');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    let schools = Array(20).fill('');
    schools = schools.map((spot) => {
      return {
        name: `${faker.address.city()} University`,
        imageURL: faker.image.city(),
        number: faker.random.number(),
        description: faker.lorem.paragraphs(3),
      };
    });
    await schools.map((school) => {
      Campus.create({
        name: school.name,
        imageURL: school.imageURL,
        number: school.number,
        description: school.description,
      });
    });

    let students = Array(100).fill('');
    students = students.map((student) => {
      return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        imageURL: faker.image.people(),
        gpa: Math.floor(Math.random() * 41) / 10,
      };
    });
    await students.map((student) => {
      Student.create({
        name: student.name,
        imageURL: student.imageURL,
        gpa: student.gpa,
        CampusId: Math.floor(Math.random() * schools.length + 1),
      });
    });
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = syncAndSeed;
