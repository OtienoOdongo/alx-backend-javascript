const getStudentIdsSum = (studentList) => studentList.reduce((sum, value) => sum + value.id, 0);

export default getStudentIdsSum;
