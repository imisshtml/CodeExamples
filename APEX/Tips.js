import React, { Component } from 'react';
import { View } from 'react-native';

class Tips extends Component {
	renderTips() {
		return this.props.data.map(item => {
			 return this.props.renderTip(item);});
	}

	render() {
		return (
			<View style={{}}>
				{this.renderTips()}
			</View>
		);
	}
}

export default Tips;