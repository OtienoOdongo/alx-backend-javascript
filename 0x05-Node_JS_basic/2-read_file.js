const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.split('\n')
      .map(student => student.split(','))
      .filter(student => student.length === 4 && student[0] !== 'firstname')
      .map(([firstName, lastName, age, field]) =>
      ({ firstName, lastName, age: parseInt(age), field }));

    const countAndList = (students, field) => {
      const filteredStudents = students.filter(student => student.field === field);
      console.log(`Number of students in ${field}: ${filteredStudents.length}.
        List: ${filteredStudents.map(student => student.firstName).join(', ')}`);
    };

    console.log(`Number of students: ${students.length}`);
    countAndList(students, 'CS');
    countAndList(students, 'SWE');
  } catch (error) {
    console.error(`Cannot load the database: ${error.message}`);
  }
};

module.exports = countStudents;
