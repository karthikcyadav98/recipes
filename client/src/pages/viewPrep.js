import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Appbar, Card, Paragraph } from 'react-native-paper';

class ViewPrep extends Component {
	state = {
		allRecipes: '',
		data: ''
	};

	componentDidMount() {
		this.setState({
			data: this.props.route.params.item
		});
	}

	handleBack = () => {
		this.props.navigation.navigate('Recipe');
	};

	render() {
		console.log('ajkgd', this.props.route.params.item);
		return (
			<ScrollView>
				<Appbar.Header stle={{ position: 'fixed' }}>
					<Appbar.BackAction onPress={this.handleBack} />
					<Appbar.Content
						title={this.props.route.params.item.frecipename}
						subtitle={this.props.route.params.item.frecipecode}
					/>
				</Appbar.Header>
				<Card key={this.props.route.params.item._id}>
					<Card.Cover source={{ uri: this.props.route.params.item.imageUrl }} />
					<Card.Title
						title={this.props.route.params.item.frecipename}
						subtitle={this.props.route.params.item.frecipecode}
					/>
					<Card.Content>
						<Paragraph>{this.props.route.params.item.fpreparation}</Paragraph>
					</Card.Content>
				</Card>
			</ScrollView>
		);
	}
}

export default ViewPrep;
