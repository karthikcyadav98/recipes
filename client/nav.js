import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Recipe from './src/pages/Recipe';
import ViewPrep from './src/pages/viewPrep';
import AddItem from './src/pages/AddItem';

const Stack = createStackNavigator();
NavBar = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* Recipe */}
				<Stack.Screen
					name="Recipe"
					options={{
						title: 'Recipe',
						headerShown: false
					}}
				>
					{(props) => <Recipe {...props} />}
				</Stack.Screen>

				{/* View Prepration */}
				<Stack.Screen
					name="ViewPrep"
					options={{
						title: 'ViewPrep',
						headerShown: false
					}}
				>
					{(props) => <ViewPrep {...props} />}
				</Stack.Screen>

				{/* Add Item*/}
				<Stack.Screen
					name="AddItem"
					options={{
						title: 'AddItem',
						headerShown: false
					}}
				>
					{(props) => <AddItem {...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default NavBar;
