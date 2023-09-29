export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;

    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
