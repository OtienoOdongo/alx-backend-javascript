export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}



export function getLast() {
  return ' is okay';
}



export function taskNext() {
	let combination = 'But sometimes let';
	const last = getLast(); // Getting the last part separately
	combination += last;

	return combination;
}
