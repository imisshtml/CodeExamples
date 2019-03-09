import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import styles from './styles/styles';

class Panel3x3 extends Component {
	renderCubes() {
		//the props.data.map iterates over (for loop) an object/array of data to return. Each item => is a row in the object
		return this.props.data.map(item => {
			//here we are look at each piece of data and calling the renderCard from the main app.js file
			//the item is passed through out and represents the row of data being parsed
		    return this.props.renderCube(item);//this must match what the prop is in the parent file
		});
	}

	render() {
		return (
			<View style={styles.panelContainer}>
				{/* this.renderCards() is calling the renderCards function above, 
					which is a function that will loop and display all data here */}
				{this.renderCubes()}
			</View>
		);
	}
}

export default Panel3x3;