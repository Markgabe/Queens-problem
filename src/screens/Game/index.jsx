/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, MenuContainer, TableSpace, NextButton, PreviousButton } from './styles';

import Table from '../../components/Table';
import Block from '../../components/Block';

import Queens from '../../utils/n-queens'

function Game() {
	const [size, setSize] = useState(8);
	const [queensMat, setQueensMat ] = useState(new Array(100).fill(false).map(()=>new Array(100).fill(false)));
	const [blockedMat, setBlockedMat ] = useState(new Array(100).fill(false).map(()=>new Array(100).fill(false)));
	
	const [xVal, setXVal] = useState(0)
	const [yVal, setYVal] = useState(0)
	const [tam, setTam] = useState(8)

	const [lastMovement, setLastMovement] = useState(0)


	const movements = []

	Queens(8).forEach(queen => {
		movements.push([queen.lin, queen.col])
	})

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
		let aux = new Array(100).fill(false).map(()=>new Array(100).fill(false))
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

	const modX = (e) => {
		e.preventDefault()
		setXVal(parseInt(e.target.value, 10) || 0)
	}

	const modY = (e) => {
		e.preventDefault()
		setYVal(parseInt(e.target.value, 10) || 0)
	}

	const modTam = (e) => {
		e.preventDefault()
		setTam(parseInt(e.target.value, 10) || 0)
	}
	
	return (
		<Container>
			<TableSpace>
				<Table size={size} queensMat={queensMat} blockedMat={blockedMat}/>
			</TableSpace>
			<MenuContainer>
				<div>
					<h1 className="display-4">Mover dama</h1>
					<input type="text" value={xVal} onChange={e => modX(e)}/>
					<input type="text" value={yVal} onChange={e => modY(e)}/>
					<button onClick={() =>switchValue(xVal, yVal)}>Mover</button>
				</div>
				<div>
					<h1 className="display-4">Mudar tamanho</h1>
					<input type="text" value={tam} onChange={e => modTam(e)}/>
					<button onClick={() => setSize(tam)}>Mudar</button>
				</div>
				<div>
					<PreviousButton onClick={() => doMovement("prev")}/>
					<NextButton onClick={() => doMovement("next")}/>
				</div>
			</MenuContainer>
		</Container>
	);
}

export default Game;
