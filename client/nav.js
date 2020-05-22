import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Dashboard from './src/pages/Dashboard';

const Stack = createStackNavigator();
NavBar = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* Dashboard */}
				<Stack.Screen
					name="Dashboard"
					options={{
						title: 'Dashboard',
						headerShown: false
					}}
				>
					{(props) => <Dashboard {...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default NavBar;
