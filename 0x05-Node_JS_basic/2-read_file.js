const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const students = data.split('\n')
    .map(student => student.split(','))
    .filter(student => student.length === 4 && student[0] !== 'firstname')
    .map(student => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  const getStudentsByField = (field) => students
    .filter(student => student.field === field)
    .map(student => student.firstName);

  const csStudents = getStudentsByField('CS');
  const sweStudents = getStudentsByField('SWE');

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
}

module.exports = countStudents;

