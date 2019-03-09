import React, { Component } from "react";
import {
  View,
  PanResponder,
  Animated,
  TouchableWithoutFeedback, Easing
} from "react-native";

import { connect } from 'react-redux';
import { setID, updateComp, curr_1, curr_2, curr_3, curr_4, curr_5, curr_6, curr_7, curr_8, curr_9 } from '../actions/update_cube';

const mapStateToProps = (state) => ({
	loc: state.cubeReducer.loc,
	moves: state.cubeReducer.moves,
	target_1: state.cubeReducer.target_1,
	target_2: state.cubeReducer.target_2,
	target_3: state.cubeReducer.target_3,
	target_4: state.cubeReducer.target_4,
	target_5: state.cubeReducer.target_5,
	target_6: state.cubeReducer.target_6,
	target_7: state.cubeReducer.target_7,
	target_8: state.cubeReducer.target_8,
	target_9: state.cubeReducer.target_9,
	currr_1: state.cubeReducer.curr_1,
	currr_2: state.cubeReducer.curr_2,
	currr_3: state.cubeReducer.curr_3,
	currr_4: state.cubeReducer.curr_4,
	currr_5: state.cubeReducer.curr_5,
	currr_6: state.cubeReducer.curr_6,
	currr_7: state.cubeReducer.curr_7,
	currr_8: state.cubeReducer.curr_8,
	currr_9: state.cubeReducer.curr_9,
});
  
const mapDispatchToProps = (dispatch) => ({
	setID: (num) => {dispatch(setID(num))},
	updateComp: (num) => {dispatch(updateComp(num))},
    curr_1: (str) => {dispatch(curr_1(str))},
    curr_2: (str) => {dispatch(curr_2(str))},
    curr_3: (str) => {dispatch(curr_3(str))},
    curr_4: (str) => {dispatch(curr_4(str))},
    curr_5: (str) => {dispatch(curr_5(str))},
    curr_6: (str) => {dispatch(curr_6(str))},
    curr_7: (str) => {dispatch(curr_7(str))},
    curr_8: (str) => {dispatch(curr_8(str))},
    curr_9: (str) => {dispatch(curr_9(str))},
});

let myY = 0;
let moving = false;

class Cubes extends Component {
  	constructor(props) {
		super(props);
		this.state = {
			pan: new Animated.ValueXY(),
			id: this.props.id,
			myColor: this.props.myColor,
			cubeWidth: this.props.cubeWidth,
			yMove: this.props.yMove,
			xMove: this.props.xMove,
			borRadius: this.props.border,
			showDraggable: true,
			dropAreaValues: null,
			opacity: new Animated.Value(1),
			push: this.props.push,
			currX:0,
			currY:0,
			currPanelPos: this.props.currPanelPos
		};
	}
	
	chkMove = (dir) => {
		if(this.state.id == 25){
			return false;
		}else if(this.state.currPanelPos+1 == this.props.loc && dir == 'right' ){
			this.props.setID(this.state.currPanelPos);
			this.setState({currPanelPos: this.props.loc});
			this.checkCurrPanelPos();
			return true;
		}else if(this.state.currPanelPos-1 == this.props.loc && dir == 'left' ){
			this.props.setID(this.state.currPanelPos);
			this.setState({currPanelPos: this.props.loc});
			this.checkCurrPanelPos();
			return true;
		}else if(this.state.currPanelPos+5 == this.props.loc && dir == 'down' ){
			this.props.setID(this.state.currPanelPos);
			this.setState({currPanelPos: this.props.loc});
			this.checkCurrPanelPos();
			return true;
		}else if(this.state.currPanelPos-5 == this.props.loc && dir == 'up' ){
			this.props.setID(this.state.currPanelPos);
			this.setState({currPanelPos: this.props.loc});
			this.checkCurrPanelPos();
			return true;
		}
		return false;
	}

	checkCurrPanelPos = () => {
		//Data removed for public view
	} 

  	componentWillMount() {
		this.panResponder = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onStartShouldSetPanResponder:(e, gestureState) => true,
			onPanResponderGrant: (e, gestureState) => {
			},
			onPanResponderMove: (e, gestureState) => {
				tmpY = gestureState.dy;
				if(tmpY < 0){tmpY = tmpY * -1;}
				tmpX = gestureState.dx;
				if(tmpX < 0){tmpX = tmpX * -1;}
				if(gestureState.dy > 0 && tmpY > tmpX && !moving && this.chkMove('down')){
					moving = true;
					moveMe = this.state.currY+this.state.push+this.state.cubeWidth;
					Animated.timing(this.state.pan, {
						toValue: { x: this.state.currX, y: moveMe },
						duration: 200,
						easing: Easing.linear
					}).start();
					this.setState({currY: moveMe });
				} else if(gestureState.dy < 0 && tmpY > tmpX && !moving && this.chkMove('up')){
					moving = true;
					moveMe = ((this.state.push+this.state.cubeWidth) - this.state.currY)*-1;
					Animated.timing(this.state.pan, {
						toValue: { x: this.state.currX, y: moveMe},
						duration: 200,
						easing: Easing.linear
					}).start();
					this.setState({currY: moveMe });
				} else if(gestureState.dx > 0 && tmpX > tmpY && !moving && this.chkMove('right')){
					moving = true;
					moveMe = this.state.currX+this.state.push+this.state.cubeWidth;
					Animated.timing(this.state.pan, {
						toValue: { x: moveMe, y: this.state.currY },
						duration: 200,
						easing: Easing.linear
					}).start();
					this.setState({currX: moveMe });
				} else if(gestureState.dx < 0 && tmpX > tmpY && !moving && this.chkMove('left')){
					moving = true;
					moveMe = ((this.state.push+this.state.cubeWidth) - this.state.currX)*-1;
					Animated.timing(this.state.pan, {
						toValue: { x: moveMe, y: this.state.currY },
						duration: 200,
						easing: Easing.linear
					}).start();
					this.setState({currX: moveMe });
				}
			},
			onPanResponderRelease: (e, gesture) => {
				moving = false;
			}
		});
  	}
 
  	render() {
		const panStyle = {
		transform: this.state.pan.getTranslateTransform()
		}
		return (
			<Animated.View 
				{...this.panResponder.panHandlers}
				style={[panStyle]}
				key={this.state.id}
			>
				<TouchableWithoutFeedback 
				>
					<View
						style={{
							backgroundColor:this.state.myColor,
							width:this.state.cubeWidth,
							height:this.state.cubeWidth,
							position: 'absolute',
							top: this.state.yMove,
							left: this.state.xMove,
							bottom: 0,
							right: 0,
							borderRadius:this.state.borRadius
						}}
					></View>
				</TouchableWithoutFeedback>
			</Animated.View>
		);
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cubes);