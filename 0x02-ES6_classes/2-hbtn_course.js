export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this._name = name;
    this._length = length;
    this._students = [...students];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students) && students.every((item) => typeof item !== 'string')) {
      throw new TypeError('Students must be array of strings');
    } else {
      this._students = students;
    }
  }
}
