import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

class Dashboard extends React.Component {
	state = {
		index: 0,
		routes: [
			{ key: 'recipe', title: 'Recipe', icon: 'library' },
			{ key: 'addRecipe', title: 'Add Recipe', icon: 'plus' }
		]
	};

	handleIndexChange = (index) => this.setState({ index });

	renderScene = BottomNavigation.SceneMap({
		recipe: Recipe,
		addRecipe: AddRecipe
	});

	render() {
		return (
			<BottomNavigation
				navigationState={this.state}
				onIndexChange={this.handleIndexChange}
				renderScene={this.renderScene}
			/>
		);
	}
}

export default Dashboard;
