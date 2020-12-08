import { initializeAndFillArray, cloneArray } from './arrays'

export default function nQueens(n) {
	let queens = []
	let movements = []
	let removedQueens = []
	let table = initializeAndFillArray(n, "v")

    let lin = 0
	let insertPosition = -1
	let lastInsertedQueen = {lin: -1, col: -1}
	let triedFirst = 0

	while (lin < n) {
		if (lin === 0) triedFirst++;
		if (triedFirst > n) break;
		insertPosition = firstFreePosition(table[lin])
		if (insertPosition >= 0) {
			queens.push({lin, col: insertPosition})
			movements.push({lin, col: insertPosition})
			lin++
		} else {
			if (allBlocked(table[lin])) {
				lin--
				lastInsertedQueen = queens.pop()
				removedQueens.push({lin: lastInsertedQueen.lin, col: lastInsertedQueen.col})
				movements.push({lin: lastInsertedQueen.lin, col: lastInsertedQueen.col})
				table[lastInsertedQueen.lin, lastInsertedQueen.col] = "x"
			} else {
				if (markedPositions(table[lin])) {
					[table[lin], removedQueens] = removeMarkedPositions(table[lin], removedQueens, lin)
					lin--
				} else {
					lastInsertedQueen = queens.pop()
					removedQueens.push({lin: lastInsertedQueen.lin, col: lastInsertedQueen.col})
					movements.push({lin: lastInsertedQueen.lin, col: lastInsertedQueen.col})
					table[lastInsertedQueen.lin, lastInsertedQueen.col] = "x"
					
				}
			}
		}

		table = updateBlocked(n, queens, removedQueens)
	}
	
	
	return [movements, queens]
}

const firstFreePosition = line => {
	for (let pos = 0; pos < line.length; pos++) {
		if (line[pos] === "v") {
			return pos
		}
	}
	return -1
}

const markedPositions = line => {
	let hasMarked = false
	for (let pos = 0; pos < line.length; pos++) {
		if (line[pos] === "x") {
			hasMarked = true
		}
		if (line[pos] === "o") return false
	}
	return hasMarked && firstFreePosition(line) === -1
}

const allBlocked = line => {
	for (let pos = 0; pos < line.length; pos++) {
		if (line[pos] !== "b") {
			return false
		}
	}
	return true
}

const removeMarkedPositions = (line, removedList, lineIndex) => {
	let aux = cloneArray(line)
	for (let pos = 0; pos < line.length; pos++) {
		if (line[pos] === "x") {
			aux[pos] = "v"
			removedList.splice(removedList.indexOf({lin: lineIndex, col: pos}), 1)
		}
	}
	return [aux, removedList]
}

const updateBlocked = (size, queensList, removedQueensList) => {
	let aux = initializeAndFillArray(size, "v")

	queensList.forEach(queen => {
		let {lin, col} = queen
		for (let diag = 0; diag < size; diag++) {
			aux[diag][col] = "b"
			aux[lin][diag] = "b"
			
			if (diag + lin < size && diag + col < size)
				aux[lin + diag][col + diag] = "b"
			if (lin - diag >= 0 && col - diag >= 0)
				aux[lin - diag][col - diag] = "b"
			if (lin - diag >= 0 && col + diag < size)
				aux[lin - diag][col + diag] = "b"
			if (lin + diag < size && col - diag >= 0)
				aux[lin + diag][col - diag] = "b"
		}
	})
	
	queensList.forEach(queen => {
		let {lin, col} = queen

		aux[lin][col] = "o"
	})
	
	removedQueensList.forEach(queen => {
		let {lin, col} = queen

		aux[lin][col] = "x"
	})

	return aux
}

