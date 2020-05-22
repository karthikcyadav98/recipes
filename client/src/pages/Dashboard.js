import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Dashboard extends Component {
	render() {
		console.log('useradjhagd', this.props.auth);
		return (
			<View>
				<Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Dashboard</Text>
			</View>
		);
	}
}

export default Dashboard;
