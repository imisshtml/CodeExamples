import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Switch,
	Dimensions, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Ad from './Ad';
import {
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { set, cond, block, eq, add, Value, event, concat, multiply, lessThan } = Animated;
const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;

class MapScreen extends Component {


	constructor(props) {
    super(props);
    this.X = new Value(0);
    this.Y = new Value(0);
    this.R = new Value(0);
		this.Z = new Value(1);
		this.origX = new Value(0);
		this.origY = new Value(0);
    const offsetX = new Value(0);
    const offsetY = new Value(0);
    const offsetR = new Value(0);
		const offsetZ = new Value(1);

    this.handlePan = event([
      {
        nativeEvent: ({ translationX: x, translationY: y, state }) =>
          block([
            set(this.X, add(x, offsetX)),
            set(this.Y, add(y, offsetY)),
            cond(eq(state, State.END), [
              set(offsetX, add(offsetX, x)),
              set(offsetY, add(offsetY, y)),
						])
          ]),
      },
    ]);

    this.handleZoom = event([
      {
        nativeEvent: ({ scale: z, state }) =>
          block([
            cond(eq(state, State.ACTIVE), set(this.Z, multiply(z, offsetZ))),
						cond(eq(state, State.END), [set(offsetZ, multiply(offsetZ, z))]),
						cond(lessThan(z, 1), [set(this.Z, 1)]),
          ]),
      },
		]);
		
		this.state = {
			mapView: 'normal',
			viewLoot: false,
			viewNessie: false,
			viewRes: false,
			switch1Value: false,
		}


  }

  rotationRef = React.createRef();
  panRef = React.createRef();
  pinchRef = React.createRef();
	
	changeMode(mode) {
		this.setState({mapView: mode});
	}

	renderLayer(view){
		if(Platform.OS === 'ioss'){
			if(view === 'loot' && this.state.viewLoot){
				return(
					<Image 
						style={{width: winWidth, height: winWidth, position: 'absolute', top:0}}
						source={require('../assets/map_loot.png')} 
						resizeMode="contain"
					/>
				);
			}else if(view === 'res' && this.state.viewRes){
				return(
					<Image 
						style={{width: winWidth, height: winWidth, position: 'absolute', top:0}}
						source={require('../assets/map_res.png')} 
						resizeMode="contain"
					/>
				);
			}else if(view === 'nessie' && this.state.viewNessie){
				return(
					<Image 
						style={{width: winWidth, height: winWidth, position: 'absolute', top:0}}
						source={require('../assets/map_nessie.png')} 
						resizeMode="contain"
					/>
				);
			}else{
				return null;
			}
		}else{
			if(view === 'loot' && this.state.viewLoot){
				return(
					<Animated.Image
						resizeMode="contain"
						style={[
							styles.box,
							{
								transform: [
									{ translateX: this.X },
									{ translateY: this.Y },
									{ scale: this.Z },
								], position: 'absolute', top:0
							},
						]}
						source={require('../assets/map_loot.png')}
					/>
				);
			}else if(view === 'res' && this.state.viewRes){
				return(
					<Animated.Image
						resizeMode="contain"
						style={[
							styles.box,
							{
								transform: [
									{ translateX: this.X },
									{ translateY: this.Y },
									{ scale: this.Z },
								], position: 'absolute', top:0
							},
						]}
						source={require('../assets/map_res.png')}
					/>
				);
			}else if(view === 'nessie' && this.state.viewNessie){
				return(
					<Animated.Image
						resizeMode="contain"
						style={[
							styles.box,
							{
								transform: [
									{ translateX: this.X },
									{ translateY: this.Y },
									{ scale: this.Z },
								], position: 'absolute', top:0
							},
						]}
						source={require('../assets/map_nessie.png')}
					/>
				);
			}else{
				return null;
			}
		}	
	}



	renderMap(){
			if(Platform.OS === 'ioss'){
				return(
					<ScrollView minimumZoomScale={1} maximumZoomScale={5} >
						<View>
							<Image 
								style={{width: winWidth, height: winWidth}}
								source={require('../assets/map_base.jpg')} 
								resizeMode="contain"
							/>
							{this.renderLayer('loot')}
							{this.renderLayer('nessie')}
							{this.renderLayer('res')}
						</View>
					</ScrollView>
				);
			}else{
				return(
					<View style={styles.container}>
						
						<PanGestureHandler
							ref={this.panRef}
							simultaneousHandlers={[this.rotationRef, this.pinchRef]}
							onGestureEvent={this.handlePan}
							onHandlerStateChange={this.handlePan}>
							<Animated.View>
								<PinchGestureHandler
									ref={this.pinchRef}
									simultaneousHandlers={[this.rotationRef, this.panRef]}
									onGestureEvent={this.handleZoom}
									onHandlerStateChange={this.handleZoom}>
									<Animated.View>
										
											<Animated.Image
												resizeMode="contain"
												style={[
													styles.box,
													{
														transform: [
															{ translateX: this.X },
															{ translateY: this.Y },
															{ scale: this.Z },
														],
													},
												]}
												source={require('../assets/map_base.jpg')}
											/>
											{this.renderLayer('loot')}
											{this.renderLayer('nessie')}
											{this.renderLayer('res')}
									
									</Animated.View>
								</PinchGestureHandler>
							</Animated.View>
						</PanGestureHandler>
					
					</View>
				);
			}
	}

renderButton(bttn){
	if(bttn === 'supplies'){
		if(this.state.viewLoot){
			return(
			<TouchableOpacity  style={{}} onPress={() => this.setState({viewLoot: false})}>
				<View style={{height:30, width: winWidth*.2, paddingTop: 5, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#c80000', borderColor: '#ff6000' }}>
					<Text style={{color:'#ffffff'}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}else{
			return(
			<TouchableOpacity  style={{}} onPress={() => this.setState({viewLoot: true})}>
				<View style={{height:30, width: winWidth*.2, paddingTop: 5, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#444444', borderColor: '#a2a2a2' }}>
					<Text style={{color:'#ffffff'}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}
	}else if(bttn === 'respawn'){
		if(this.state.viewRes){
			return(
			<TouchableOpacity  style={{}} onPress={() => this.setState({viewRes: false})}>
				<View style={{height:30, width: winWidth*.2, paddingTop: 5, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#c80000', borderColor: '#ff6000' }}>
					<Text style={{color:'#ffffff'}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}else{
			return(
			<TouchableOpacity  style={{}} onPress={() => this.setState({viewRes: true})}>
				<View style={{height:30, width: winWidth*.2, paddingTop: 5, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#444444', borderColor: '#a2a2a2' }}>
					<Text style={{color:'#ffffff'}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}
	}else if(bttn === 'nessie'){
		if(this.state.viewNessie){
			return(
			<TouchableOpacity  style={{}} onPress={() => this.setState({viewNessie: false})}>
				<View style={{height:30, width: winWidth*.2, paddingTop: 5, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#c80000', borderColor: '#ff6000' }}>
					<Text style={{color:'#ffffff'}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}else{
			return(
			<TouchableOpacity  style={{}} onPress={() => this.setState({viewNessie: true})}>
				<View style={{height:30, width: winWidth*.2, paddingTop: 5, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#444444', borderColor: '#a2a2a2' }}>
					<Text style={{color:'#ffffff'}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}
	}
	
}


  render() {
		return (
			<ImageBackground
                style={{width: '100%', height: '100%', backgroundColor: '#231f20'}}
                source={require('../assets/bg_red.jpg')} 
            >
				<Ad />
				<View style={{padding: 10}}>
					<Text style={{fontWeight: 'bold', fontSize:16, color: '#ffffff'}}>
						Kings Canyon
					</Text>
				</View>
				<View style={{flexDirection: 'row', marginBottom: 5, paddingLeft: 10}}>
					{this.renderButton('supplies')}
					{this.renderButton('respawn')}
					{this.renderButton('nessie')}
				</View>
				
				{this.renderMap()}
		
			</ImageBackground>
		);
	}
}

const IMAGE_SIZE = winWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

export default MapScreen;