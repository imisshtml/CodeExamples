import React, { Component } from 'react';
import { View } from 'react-native';

class Skins extends Component {
	renderSkins() {
		return this.props.data.map(item => {
			 return this.props.renderSkin(item);
		});
	}

	render() {
		return (
			<View style={{}}>
				{this.renderSkins()}
			</View>
		);
	}
}

export default Skins;