const createInt8TypedArray = (length, position, value) => {
  if (position >= length) throw Error('Position outside range');

  const buffer = new ArrayBuffer(length);

  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;

  const dataView = new DataView(buffer);

  return dataView;
};

export default createInt8TypedArray;
