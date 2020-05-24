// import React, { Component } from 'react';
// import { Appbar } from 'react-native-paper';

// handleMore = () => {
// 	console.log('display more');
// };

// class Header extends Component {
// 	render() {
// 		return (
// 			<Appbar.Header>
// 				<Appbar.Content title="Recipes" subtitle="all recipes" />
// 				<Appbar.Action icon="dots-vertical" onPress={this.handleMore} />
// 			</Appbar.Header>
// 		);
// 	}
// }

// export default Header;

import * as React from 'react';
import { Appbar } from 'react-native-paper';

class Header extends React.Component {
	handleMore = () => console.log('Shown more');

	render() {
		return (
			<Appbar.Header>
				<Appbar.Content title="RECIPES" subtitle="All Recipes" />
				<Appbar.Action icon="plus" onPress={this.handleMore} />
			</Appbar.Header>
		);
	}
}

export default Header;
