const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const studentsData = data.split('\r\n').slice(1)
    .map((studentData) => studentData.split(','))
    .map((studentData) => ({
      firstName: studentData[0],
      lastName: studentData[1],
      age: studentData[2],
      field: studentData[3],
    }));

  const studentFields = studentsData.map((student) => student.field);
  const uniqueFieldsSet = new Set(studentFields);
  const studentsByField = {};

  for (const field of uniqueFieldsSet) {
    studentsByField[field] = [];
  }

  for (const student of studentsData) {
    studentsByField[student.field].push(student.firstName);
  }

  console.log(studentsByField);
  return studentsByField;
}

module.exports = countStudents;
