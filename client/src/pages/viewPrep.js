import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Appbar, Card, Paragraph } from 'react-native-paper';
import Loader from './Loader';

class ViewPrep extends Component {
	state = {
		allRecipes: '',
		data: '',
		loader: false
	};

	componentDidMount() {
		this.setState({ loader: true });
		this.setState({
			data: this.props.route.params.item
		});
		this.setState({ loader: false });
	}

	handleBack = () => {
		this.props.navigation.navigate('Recipe');
	};

	render() {
		console.log('ajkgd', this.props.route.params.item);
		return this.state.loader ? (
			<Loader />
		) : (
			<ScrollView>
				<Appbar.Header stle={{ position: 'fixed' }}>
					<Appbar.BackAction onPress={this.handleBack} />
					<Appbar.Content
						title={this.props.route.params.item.frecipename}
						subtitle={this.props.route.params.item.frecipecode}
					/>
				</Appbar.Header>
				<ScrollView>
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
			</ScrollView>
		);
	}
}

export default ViewPrep;
