import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button, Portal, Dialog, Paragraph } from 'react-native-paper';
import axios from 'axios';
import Loader from './Loader';

export class AddItem extends Component {
	state = {
		rName: '',
		rCode: '',
		rImgUrl: '',
		rCat: '',
		rIngred: '',
		rPrep: '',
		dialog: false,
		loader: false
	};

	handleSubmit = (data) => {
		this.setState({
			loader: true
		});
		axios
			.post('https://mighty-plateau-02520.herokuapp.com/api/recipes/add', data)
			.then((res) => {
				this.setState({ dialog: true });
				this.setState({ loader: true });
			})
			.catch((err) => console.log(err));
	};

	handleDismiss = () => {
		this.setState({ dialog: !this.state.dialog });
	};

	handleOk = () => {
		this.props.navigation.navigate('Recipe');
	};

	handleBack = () => {
		this.props.navigation.navigate('Recipe');
	};

	render() {
		return (
			<ScrollView>
				{this.state.loader ? (
					<Loader />
				) : (
					<View>
						<Appbar.Header stle={{ position: 'fixed' }}>
							<Appbar.BackAction onPress={this.handleBack} />
							<Appbar.Content title="Add a New Item" />
						</Appbar.Header>

						<ScrollView style={styles.sectionContainer}>
							<TextInput
								label="Recipe Name"
								value={this.state.rName}
								mode="outlined"
								onChangeText={(rName) => this.setState({ rName })}
							/>
							<TextInput
								label="Recipe Code"
								value={this.state.rCode}
								mode="outlined"
								onChangeText={(rCode) => this.setState({ rCode })}
							/>
							<TextInput
								label="Image URL"
								value={this.state.rImgUrl}
								mode="outlined"
								onChangeText={(rImgUrl) => this.setState({ rImgUrl })}
							/>
							<TextInput
								label="Category"
								value={this.state.rCat}
								mode="outlined"
								onChangeText={(rCat) => this.setState({ rCat })}
							/>
							<TextInput
								multiline={true}
								label="Ingredients"
								value={this.state.rIngred}
								mode="outlined"
								onChangeText={(rIngred) => this.setState({ rIngred })}
							/>
							<TextInput
								multiline={true}
								label="Preparation"
								value={this.state.rPrep}
								mode="outlined"
								onChangeText={(rPrep) => this.setState({ rPrep })}
							/>

							<Button
								style={{ marginTop: 20 }}
								mode="contained"
								onPress={() =>
									this.handleSubmit({
										frecipename: this.state.rName,
										frecipecode: this.state.rCode,
										imageUrl: this.state.rImgUrl,
										category: this.state.rCat,
										fingredients: this.state.rIngred,
										fpreparation: this.state.rPrep
									})}
							>
								Submit
							</Button>
						</ScrollView>
					</View>
				)}

				<Portal>
					<Dialog visible={this.state.dialog} onDismiss={this.handleDismiss}>
						<Dialog.Title>Alert</Dialog.Title>
						<Dialog.Content>
							<Paragraph>Recipe Added Successfully</Paragraph>
						</Dialog.Content>
						<Dialog.Actions>
							<Button onPress={this.handleOk}>OK</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	}
});

export default AddItem;
