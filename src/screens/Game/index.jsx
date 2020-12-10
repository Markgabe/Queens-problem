/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Container, TableSpace } from './styles';

import Table from '../../components/Table';
import Menu from '../../components/Menu';

import Queens from '../../utils/n-queens'
import { initializeAndFillArray } from '../../utils/arrays'

function Game() {
	const [size, setSize] = useState(8)
	const [queensMat, setQueensMat ] = useState(initializeAndFillArray(100, false))
	const [blockedMat, setBlockedMat ] = useState(initializeAndFillArray(100, false))

	const [tam, setTam] = useState(8)

	const [lastMovement, setLastMovement] = useState(0)
	const [movements, setMovements] = useState([])

	useEffect(() => {
		const [moves, queens] = Queens(size)
		const auxMoves = []
		moves.forEach(queen => {
			auxMoves.push([queen.lin, queen.col])
		})
	
		setMovements(auxMoves)
	}, [size])

	

	const switchValue = (i, j) => {
		let aux = JSON.parse(JSON.stringify(queensMat))
		aux[i][j] = !aux[i][j]
		let blockedAux = updateBlocked(aux)

		if (!blockedMat[i][j] || queensMat[i][j]) {
			setQueensMat(aux)
			setBlockedMat(blockedAux)
		}
		if (blockedMat[i][j]) setQueensMat(aux)
	}

	const updateBlocked = mat => {
		let aux = initializeAndFillArray(100, false)
		let queensList = []

		for (let i = 0; i <  100; i++) {
			for (let j = 0; j < 100; j++) {
				if (mat[i][j]) queensList.push([i, j])
			}
		}

		queensList.forEach(queen => {
			let [lin, col] = queen
			for (let diag = 0; diag < 100; diag++) {
				aux[diag][col] = true
				aux[lin][diag] = true
				if (diag + lin < 100 && diag + col < 100)
					aux[lin + diag][col + diag] = true
				if (lin - diag >= 0 && col - diag >= 0)
					aux[lin - diag][col - diag] = true
				if (lin - diag >= 0 && col + diag < 100)
					aux[lin - diag][col + diag] = true
				if (lin + diag < 100 && col - diag >= 0)
					aux[lin + diag][col - diag] = true
			}
		})

		return aux
	}

	const doMovement = (move) => {
		if (move === "next") {
			if (lastMovement < movements.length) {
				setLastMovement(lastMovement + 1)
				let [x, y] = movements[lastMovement]
				switchValue(x, y)
			}
		} else if (move === "prev") {
			if (lastMovement !== 0) {
				let [x, y] = movements[lastMovement - 1]
				switchValue(x, y)
				setLastMovement(lastMovement - 1)
			}
		}
	}
	const handleSetSize = () => {
		setSize(tam)
		const auxMoves = []
		Queens(tam)[0].forEach(queen => {
			auxMoves.push([queen.lin, queen.col])
		})
		setMovements(auxMoves)
	}

	const modTam = (e) => {
		setTam(parseInt(e.target.value, 10) || 0)
	}
	
	return (
		<Container>
			<TableSpace>
				<Table size={size} queensMat={queensMat} blockedMat={blockedMat} switchFunction={switchValue}/>
			</TableSpace>
			<Menu 
				modTam={modTam} 
				handleSetSize={handleSetSize} 
				doMovement={doMovement} 
				tam={tam} 
				firstMove={lastMovement === 0} 
				lastMove={lastMovement === movements.length}
			/>
		</Container>
	);
}

export default Game;
