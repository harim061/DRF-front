import React from 'react';
import styled from 'styled-components';
import logo from './flim.png';

const HeaderTemplateBlock = styled.div`
	width: 1440px;
	height: 40px;
	background-color: #FFF;
	display: flex;
	position: relative;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	color : #000;
`;

const ButtonA = styled.button`
	background-color : #fff;
	margin-left : 40px;
	border : 0px;
	display : block;
	float : right;
	font-weight: 700;
`

function HeaderTemplate({ children }) {
	return (
		<>
			<HeaderTemplateBlock>
				<ButtonA>MYPAGE</ButtonA>
				<ButtonA>LOGIN</ButtonA>
				<ButtonA>JOIN</ButtonA>
			</HeaderTemplateBlock>
			<img src={logo} style={{margin : 0}}/>
		</>
	
	
	)
}

export default HeaderTemplate;
