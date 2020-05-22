import 'react-native-gesture-handler';
import React, { Component } from 'react';
import NavBar from './nav.js';
import store from './src/store';

import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import setAuthToken from './src/utils/setAuthToken';
import AsyncStorage from '@react-native-community/async-storage';

console.log('jahdkjadkahdjahjdgjahdghagdj ajdja jdad', AsyncStorage.getItem('jwtToken'));
//Check for the token
if (AsyncStorage.jwtToken) {
	//Set auth token to header auth
	setAuthToken(AsyncStorage.getItem('jwtToken'));
	//Decode the token
	const decoded = jwt_decode(AsyncStorage.getItem('jwtToken'));
	//Set user is auth
	store.dispatch(setCurrentUser(decoded));
	//check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		//Clear current profile
		store.dispatch(clearCurrentProfile());
		//Redirect to login
		this.props.navigation.navigate('login');
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<NavBar />
			</Provider>
		);
	}
}

export default App;
