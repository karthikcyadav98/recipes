import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

class AddRecipe extends Component {
	render() {
		return (
			<ScrollView>
				<Appbar.Header stle={{ position: 'fixed' }}>
					<Appbar.BackAction onPress={this.handleBack} />
					{/* <Appbar.Content
            title={this.props.route.params.item.frecipename}
            subtitle={this.props.route.params.item.frecipecode}
          /> */}
				</Appbar.Header>
			</ScrollView>
		);
	}
}

export default AddRecipe;
