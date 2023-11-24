const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');

    const parseStudent = (student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    });

    const students = data.split('\n')
      .map((student) => student.split(','))
      .filter((student) => student.length === 4 && student[0] !== 'firstname')
      .map(parseStudent);

    const filterAndMapStudents = (students, field) => students
      .filter((student) => student.field === field)
      .map((student) => student.firstName);

    const csStudents = filterAndMapStudents(students, 'CS');
    const sweStudents = filterAndMapStudents(students, 'SWE');

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

    return { students, csStudents, sweStudents };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
