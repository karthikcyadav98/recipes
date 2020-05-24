import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Paragraph, Button, Appbar } from 'react-native-paper';
import axios from 'axios';
import ViewPrep from './viewPrep';

class Recipe extends Component {
	state = {
		allRecipes: '',
		data: ''
	};

	componentDidMount() {
		axios
			.get('http://10.0.2.2:5000/api/recipes')
			.then(async (res) => {
				await this.setState({
					allRecipes: res.data
				});
			})
			.catch((err) => console.log(err));
	}

	handlePrep = async (value) => {
		this.state.allRecipes.map(async (item) => {
			if (item._id === value) {
				await this.setState({ data: item });
				await this.props.navigation.navigate('ViewPrep', { item: this.state.data });
			}
		});
	};

	handleAdd = () => {
		this.props.navigation.navigate('AddItem');
	};

	render() {
		return (
			<ScrollView>
				<Appbar.Header>
					<Appbar.Content title="RECIPES" subtitle="All Recipes" />
					<Appbar.Action icon="plus" onPress={this.handleAdd} />
				</Appbar.Header>
				{this.state.allRecipes != '' &&
					this.state.allRecipes.map((item, index) => {
						return (
							<Card key={index}>
								<Card.Cover source={{ uri: item.imageUrl }} />
								<Card.Title title={item.frecipename} subtitle={item.frecipecode} />
								<Card.Content>
									<Paragraph>{item.fingredients}</Paragraph>
									<Card.Actions>
										<Button onPress={() => this.handlePrep(item._id)}>View Preparation</Button>
									</Card.Actions>
									{/* <Card.Actions>
										<Button onPress={() => this.handlePrep(item._id)}>Delete</Button>
									</Card.Actions> */}
								</Card.Content>
							</Card>
						);
					})}
			</ScrollView>
		);
	}
}

export default Recipe;
