import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NavBar from './nav.js';
import Footer from './src/pages/Footer';
import Header from './src/pages/Header';

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#3498db',
		accent: '#f1c40f'
	}
};

class App extends Component {
	render() {
		return (
			<PaperProvider theme={theme}>
				{/* <Header /> */}
				<NavBar />
				{/* <Footer /> */}
			</PaperProvider>
		);
	}
}

export default App;
