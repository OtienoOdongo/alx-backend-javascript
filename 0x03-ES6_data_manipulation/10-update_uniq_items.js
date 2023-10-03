const updateUniqueItems = (groceries) => {
  if (!(groceries instanceof Map)) throw Error('Cannot process');
  groceries.forEach((value, key) => {
    if (value === 1) {
      groceries.set(key, 100);
    }
  });
  return groceries;
};

export default updateUniqueItems;