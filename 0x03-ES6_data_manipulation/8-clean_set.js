const cleanSet = (set, startString) => {
  if (set instanceof Set && typeof startString === 'string') {
    if (startString === '') {
      return Array.from(set)
        .filter((value) => typeof value === 'string' && value !== '')
        .join('-');
    }

    const len = startString.length;
    const filteredValues = Array.from(set)
      .filter((value) => typeof value === 'string' && value[0] === startString[0] && value
        .startsWith(startString));

    if (filteredValues.length > 0) {
      return filteredValues.map((value) => value.substring(len)).join('-');
    }
  }
  return '';
};

export default cleanSet;
