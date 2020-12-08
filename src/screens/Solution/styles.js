import styled from 'styled-components';

import {LeftArrowAlt, RightArrowAlt} from '@styled-icons/boxicons-regular'

import { MediaSkipForward } from '@styled-icons/open-iconic'

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
	width: 100%;
	cursor: pointer;
`

export const PreviousButton = styled(LeftArrowAlt)`
	width: 100%;
	cursor: pointer;
`

export const SkipButton = styled(MediaSkipForward)`
	width: 100%;
	cursor: pointer;
`