/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
} from './styles';

import Line from '../../components/Line'

function Table({ size, queensMat, blockedMat }) {
	let arr = new Array(size)
	for (let i = 0; i < size; i++) {
		arr[i] = i
	}

	return (
		<Container>
			{arr.map((pos) => {
				if (pos % 2 === 0) {
					return <Line key={pos} size={size} alternate={true} linePos={queensMat[pos]} lineBlockedPos={blockedMat[pos]}/>
				} else {
					return <Line key={pos} size={size} alternate={false} linePos={queensMat[pos]} lineBlockedPos={blockedMat[pos]}/>
				}})
			}
		</Container>
	);
}

export default Table;
