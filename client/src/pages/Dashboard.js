import React, { Component } from 'react';
import { View } from 'react-native';
import { Appbar, BottomNavigation, Text } from 'react-native-paper';

class Dashboard extends Component {
	handleBack = () => {
		console.log('Went back');
	};
	handleSearch = () => {
		console.log('Searching');
	};

	handleMore = () => {
		console.log('Shown more');
	};

	render() {
		console.log('useradjhagd', this.props.auth);
		return (
			// <View>
			<Appbar.Header>
				{/* <Appbar.BackAction onPress={this.handleBack} /> */}
				<Appbar.Content title="Recipes" subtitle="recipes" />
				{/* <Appbar.Action icon="magnify" onPress={this.handleSearch} /> */}
				{/* <Appbar.Action icon="dots-vertical" onPress={this.handleMore} /> */}
			</Appbar.Header>
			// </View>
		);
	}
}

export default Dashboard;
