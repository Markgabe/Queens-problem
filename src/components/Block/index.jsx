/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';
import queenAsset from '../../assets/queen-icon-edit.png'

function Block({ color, state, blocked }) {
	let queenSize = 40


  return (<Container color={color} blocked={blocked}>
	  {state === "queen" && <img src={queenAsset} style={{objectFit: "contain", width: "100%", height: "auto", display: "block", filter: color==="black"? "invert(1)": "invert(0)"}}/>}
  </Container>);
}

export default Block;