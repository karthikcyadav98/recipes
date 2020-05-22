import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

class Recipe extends Component {
	render() {
		return (
			<ScrollView>
				<Card>
					<Card.Title title="Chicken Kabab" subtitle="non-veg" />
					<Card.Content>
						<Paragraph>chicken kabab, egg, kabab mix powder, oil</Paragraph>
						<Card.Actions>
							<Button onPress={() => console.log('akhdkahd')}>View Preparation</Button>
						</Card.Actions>
					</Card.Content>
				</Card>
				<Card>
					<Card.Title title="Chicken Kabab" subtitle="non-veg" />
					<Card.Content>
						<Paragraph>chicken kabab, egg, kabab mix powder, oil</Paragraph>
						<Card.Actions>
							<Button onPress={() => console.log('akhdkahd')}>View Preparation</Button>
						</Card.Actions>
					</Card.Content>
				</Card>
				<Card>
					<Card.Title title="Chicken Kabab" subtitle="non-veg" />
					<Card.Content>
						<Paragraph>chicken kabab, egg, kabab mix powder, oil</Paragraph>
						<Card.Actions>
							<Button onPress={() => console.log('akhdkahd')}>View Preparation</Button>
						</Card.Actions>
					</Card.Content>
				</Card>
				<Card>
					<Card.Title title="Chicken Kabab" subtitle="non-veg" />
					<Card.Content>
						<Paragraph>chicken kabab, egg, kabab mix powder, oil</Paragraph>
						<Card.Actions>
							<Button onPress={() => console.log('akhdkahd')}>View Preparation</Button>
						</Card.Actions>
					</Card.Content>
				</Card>
				<Card>
					<Card.Title title="Chicken Kabab" subtitle="non-veg" />
					<Card.Content>
						<Paragraph>chicken kabab, egg, kabab mix powder, oil</Paragraph>
						<Card.Actions>
							<Button onPress={() => console.log('akhdkahd')}>View Preparation</Button>
						</Card.Actions>
					</Card.Content>
				</Card>
			</ScrollView>
		);
	}
}

export default Recipe;
