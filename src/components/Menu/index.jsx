import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom'
import { Home } from 'styled-icons/boxicons-regular/'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import RangeSlider from 'react-bootstrap-range-slider';

// eslint-disable-next-line react/prop-types
function Menu({ modTam, handleSetSize, doMovement, tam, firstMove, lastMove }) {
  return <Container>
	  		<Form>
				<Form.Label className="display-4" style={{fontSize: "2em"}}>Tamanho do tabuleiro</Form.Label>
				<Form.Group as={Row}>
					<Col xs="9">
						<RangeSlider
							value={tam}
							onChange={e => modTam(e)}
							variant="dark"
						/>
					</Col>
					<Col xs="3">
						<Form.Control value={tam} onChange={e => modTam(e)} />
					</Col>
				</Form.Group>
				<Button variant="dark" onClick={() => handleSetSize(tam)} block>
					Modificar
				</Button>
			</Form>
			<Pagination className="w-100 mt-3">
				<Pagination.Prev onClick={() => doMovement("prev")} className="w-50" disabled={firstMove}/>
				<Pagination.Next onClick={() => doMovement("next")} className="w-50 pl-4" disabled={lastMove}/>
			</Pagination>
			
			<Button variant="dark" onClick={() => window.location.reload()} block>
				Limpar
			</Button>

			<Link to="/" className="mt-auto">
				<Button variant="dark" block>
					<Home size="20" className="mr-2 mb-1"/>
					Home
				</Button>
			</Link>
		</Container>
}

export default Menu;