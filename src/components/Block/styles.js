import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${props => props.blocked ? "red" : props.color};
	border: 1px solid ${props => props.blocked? "blue": "transparent"};
	flex: 1 1 0;
	transition: all 0.5s;
`
