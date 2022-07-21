import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderTemplate from './components/HeaderTemplate';
import MainTemplateLeft from './components/MainTemplateLeft';
import MainTemplateRight from './components/MainTemplateRight';
import FrameTemplate from './components/FrameTemplate';
import ImageTemplate from './components/ImageTemplate';
import MenuBarTemplate from './components/MenuBarTemplate';


const GlobalStyle = createGlobalStyle`
body{
	background: 
	#F5F5F5;
}
`;

function App() {
	return (
		<>

			<GlobalStyle />
			<HeaderTemplate></HeaderTemplate>
			
			<MenuBarTemplate></MenuBarTemplate>
			
			<MainTemplateLeft></MainTemplateLeft>
			<FrameTemplate></FrameTemplate>
			<ImageTemplate></ImageTemplate>
			<FrameTemplate></FrameTemplate>
			<MainTemplateRight></MainTemplateRight>

		</>
	
	);
	
}

export default App;
