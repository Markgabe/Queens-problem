/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

import Block from '../Block'

function Line({ size, alternate, linePos, lineBlockedPos }) {

	let arr = new Array(size)
	for (let i = 0; i < size; i++) {
		arr[i] = i
	}


	return (
		<Container>
			{arr.map((pos) => {
				return (pos % 2 === 0) ?
					<Block key={pos} color={alternate ? "white" : "black"} state={linePos[pos] ? "queen" : "empty"} blocked={lineBlockedPos[pos]}/>
				:
					<Block key={pos} color={alternate ? "black" : "white"} state={linePos[pos] ? "queen" : "empty"} blocked={lineBlockedPos[pos]}/>
			})}

		</Container>
	);
}

export default Line;
