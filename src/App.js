import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainTemplate from './components/MainTemplate';
import HeaderTemplate from './components/HeaderTemplate';
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
			
			<MainTemplate></MainTemplate>
			<FrameTemplate></FrameTemplate>
			<ImageTemplate></ImageTemplate>
			<FrameTemplate></FrameTemplate>
			<MainTemplate></MainTemplate>

		</>
	);
}

export default App;
