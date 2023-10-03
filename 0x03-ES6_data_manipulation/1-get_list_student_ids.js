// eslint-disable-next-line no-unused-vars
const studentIds = [{ id: 1 }, { id: 2 }, { id: 5 }];

const getListStudentIds = (studentIds) => {
  if (Array.isArray(studentIds)) {
    return studentIds.map((student) => student.id);
  }
  return [];
};

export default getListStudentIds;
