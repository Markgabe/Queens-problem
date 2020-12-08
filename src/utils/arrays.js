export const initializeAndFillArray = (size, value) => {
	let vector = []
	let line = []

	for (let i = 0; i < size; i++) {
		line = []
		for (let j = 0; j < size; j++) {
			line.push(value)
		}
		vector.push(line)
	}
	return vector
}

export const cloneArray = array => {
	return JSON.parse(JSON.stringify(array))
}
