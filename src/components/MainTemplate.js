import React from 'react';
import styled from 'styled-components';

const MainTemplateBlock = styled.div`
	width: 292px;
	height: 2200px;

	position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
	background: #F6F9F3;


	margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
	float: left

`;

const Square = styled.div`
    position: absolute;
    width: 240px;
    height: 440px;
    float : left;
    background-color : #ECECEC;
	margin-top : 80px;
	margin-left: 26px;
	margin-right : 26px;
`

function MainTemplate({ children }) {
	return(
	<>	<MainTemplateBlock>
		<Square></Square>
		</MainTemplateBlock>
	</>)
}

export default MainTemplate;
