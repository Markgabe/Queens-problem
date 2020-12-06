import styled from 'styled-components';

import {LeftArrowAlt, RightArrowAlt} from '@styled-icons/boxicons-regular'

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const TableSpace = styled.div`
	width: 600px;
	height: 600px;
`;

export const MenuContainer = styled.div`
	width: 200px;
	height: 600px;
	display: flex;
	flex-direction: column;
`

export const NextButton = styled(RightArrowAlt)`
`

export const PreviousButton = styled(LeftArrowAlt)`
`
