import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Dimensions, AsyncStorage,
	TouchableOpacity, ScrollView, TouchableWithoutFeedback, PanResponder,
  Animated, Easing } from 'react-native';
import Ad from './Ad';
import * as data from './constants/legends.json';
import Skins from './Skins';
import Images from './constants/legendsImages';

import CollectionButton from './collectionButton';

const winWidth = Dimensions.get('window').width;
const iconWidth = winWidth*.3;
const menuWidth = winWidth*.1;
const iconHeight = iconWidth*1.52;

let skinData = [

];


class LegendsScreen extends Component {
	constructor(props) {
		super(props);
    this.state = {
			renderMenu: false,
			legend: 'BLOODHOUND',
			skin: 'default',
			renderMode: 'legend', //legend/skin/banner
			itemCollected: false,
		}

		tmp = data[this.state.legend].SKINS;
		tmp.map(skin => {
			AsyncStorage.getItem(this.props.text, (err, item) => skinData.push({ tst: item }));
		});
	}
	
	componentDidUpdate(){
			console.log('>>><<<');

	}


  selectLegend(legend) {
		this.setState({legend:legend, renderMenu: false, skin: 'default'});
	}

	openMenu() {
		this.setState({renderMenu: true});
	}

	changeMode(mode) {
		this.setState({renderMode: mode});
	}

	closeMenu(){
		if(this.state.renderMenu){
			this.setState({renderMenu: false});
		}
	}

	legendMenu(legend) {
		switch(legend){
			case 'BLOODHOUND':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity  style={{}} onPress={() => this.selectLegend('BLOODHOUND')}>
							<Image style={{width: menuWidth, height: iconHeight}}
									source={require('../assets/legend_icons/bloodhound_icon.png')} />
						</TouchableOpacity>
					);
				}else{
					return null;
				}
			case 'WRAITH':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity  style={{}} onPress={() => this.selectLegend('WRAITH')}>
							<Image style={{width: menuWidth, height: iconHeight}}
									source={require('../assets/legend_icons/wraith_icon.png')} />
						</TouchableOpacity>
					);
				}else{
					return null;
				}
			case 'GIBRALTAR':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity style={{}} onPress={() => this.selectLegend('GIBRALTAR')}>
									<Image style={{width: menuWidth, height: iconHeight}}
											source={require('../assets/legend_icons/gibraltar_icon.png')}	/>
							</TouchableOpacity>
					);
				}else{
					return null;
				}
			case 'LIFELINE':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity  style={{}} onPress={() => this.selectLegend('LIFELINE')}>
									<Image style={{width: menuWidth, height: iconHeight}}
											source={require('../assets/legend_icons/lifeline_icon.png')} />
							</TouchableOpacity>
					);
				}else{
					return null;
				}
			case 'CAUSTIC':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity style={{}} onPress={() => this.selectLegend('CAUSTIC')}>
									<Image style={{width: menuWidth, height: iconHeight}}
											source={require('../assets/legend_icons/caustic_icon.png')} />
							</TouchableOpacity>
					);
				}else{
					return null;
				}
			case 'MIRAGE':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity  style={{}}	onPress={() => this.selectLegend('MIRAGE')}>
									<Image	style={{width: menuWidth, height: iconHeight}}
											source={require('../assets/legend_icons/mirage_icon.png')} />
							</TouchableOpacity>
					);
				}else{
					return null;
				}
			case 'PATHFINDER':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity style={{}} onPress={() => this.selectLegend('PATHFINDER')}>
									<Image style={{width: menuWidth, height: iconHeight}}
											source={require('../assets/legend_icons/pathfinder_icon.png')} />
							</TouchableOpacity>
					);
				}else{
					return null;
				}
			case 'BANGALORE':
				if(legend != this.state.legend){
					return(
						<TouchableOpacity  style={{}} onPress={() => this.selectLegend('BANGALORE')}>
									<Image style={{width: menuWidth, height: iconHeight}}
											source={require('../assets/legend_icons/bangalore_icon.png')} />
							</TouchableOpacity>
					);
				}else{
					return null;
				}
		}
	}

	currentLegend() {
		switch(this.state.legend){
			case 'BLOODHOUND':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/bloodhound_icon.png')} />
					</TouchableOpacity>
				);
			case 'WRAITH':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/wraith_icon.png')} />
					</TouchableOpacity>
				);
			case 'LIFELINE':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/lifeline_icon.png')} />
					</TouchableOpacity>
				);
			case 'GIBRALTAR':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/gibraltar_icon.png')} />
					</TouchableOpacity>
				);
			case 'MIRAGE':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/mirage_icon.png')} />
					</TouchableOpacity>
				);
			case 'BANGALORE':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/bangalore_icon.png')} />
					</TouchableOpacity>
				);
			case 'PATHFINDER':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/pathfinder_icon.png')} />
					</TouchableOpacity>
				);
			case 'CAUSTIC':
				return(
					<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
						<Image style={{width: iconWidth, height: iconHeight}}
								source={require('../assets/legend_icons/caustic_icon.png')} />
					</TouchableOpacity>
				);
		}
	}

	renderButton(bttn){
			if(this.state.renderMode === bttn){
				return(
				<TouchableOpacity  style={{}} onPress={() => this.changeMode(bttn)}>
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
				<TouchableOpacity  style={{}} onPress={() => this.changeMode(bttn)}>
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

	renderHeader() {
		if(this.state.renderMenu){
			return(
				<View style={{width:winWidth, flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 0, paddingTop: 0}}>
						{this.legendMenu('BLOODHOUND')}
						{this.legendMenu('GIBRALTAR')}
						{this.legendMenu('LIFELINE')}
						{this.legendMenu('PATHFINDER')}
						{this.legendMenu('WRAITH')}
						{this.legendMenu('BANGALORE')}
						{this.legendMenu('CAUSTIC')}
						{this.legendMenu('MIRAGE')}
				</View>
			)
		}else{
			return(
				<View style={{flexDirection: 'row'}}>
					<View>
						{this.currentLegend()}
						<Text style={{fontSize: 8, color: '#fff', marginTop:-10, alignSelf: 'center'}}>(Tap to change Legend)</Text>
					</View>
					
					<View style={{ paddingLeft: 10, paddingTop: 10 }}>
						<Text style={{fontWeight: 'bold', fontSize:16, color: '#ffffff'}}>
						{this.state.legend}
						</Text>
						<View style={{flexDirection: 'row', marginBottom: 5}}>
							{this.renderButton('legend')}
							{this.renderButton('skins')}
							{/*this.renderButton('banners')*/}
						</View>
						<View>
							<Text style={{color:'#444444', fontSize: 12, fontStyle: 'italic', width: (winWidth-iconWidth)-10, fontWeight: 'bold'}}>
								"{data[this.state.legend].quote}"
							</Text>
						</View>
					</View>
				</View>
			)
		}
	}

	renderBody(){
		if(this.state.renderMode === 'legend'){
			return(
				
				<ScrollView >
				<TouchableWithoutFeedback onPress={() => this.closeMenu()}>
				<View>
				<View style={{height:125, backgroundColor:'rgba(0,0,0, .5)',
							width:'100%', 
							marginBottom:10,
							shadowColor:'#000000', 
							shadowOffset:{ width: 0, height: 2 }, 
							shadowOpacity:.5, flexDirection: 'row',
							shadowRadius:2,}}>
					<View style={{width:'100%'}}>
						<View style={{flexDirection: 'row', paddingLeft: 5, marginBottom: 5, marginTop:5}}>
							<Image 	style={{width: 30, height: 30}}
										source={Images[this.state.legend]['passive']}  />
							<View>
								<View style={{flexDirection: 'row'}}>
									<Text style={{color:'#fff', fontSize:10}}>PASSIVE </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.legend].passive}</Text>
								</View>
								<Text style={{color:'#fff', fontSize:10, width:winWidth-50}}>{data[this.state.legend].passive_detail}</Text>
							</View>
						</View>

						<View style={{flexDirection: 'row', paddingLeft: 5, marginBottom: 5}}>
							<Image 	style={{width: 30, height: 30}}
										source={Images[this.state.legend]['tactical']}  />
							<View>
								<View style={{flexDirection: 'row'}}>
									<Text style={{color:'#fff', fontSize:10}}>TACTICAL </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.legend].tactical}</Text>
								</View>
								<Text style={{color:'#fff', fontSize:10, width:winWidth-50}}>{data[this.state.legend].tactical_detail}</Text>
							</View>
						</View>

						<View style={{flexDirection: 'row', paddingLeft: 5}}>
							<Image 	style={{width: 30, height: 30}}
										source={Images[this.state.legend]['ultimate']}  />
							<View>
								<View style={{flexDirection: 'row'}}>
									<Text style={{color:'#fff', fontSize:10}}>ULTIMATE </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.legend].ultimate}</Text>
								</View>
								<Text style={{color:'#fff', fontSize:10, width:winWidth-50}}>{data[this.state.legend].ultimate_detail}</Text>
							</View>
						</View>
					</View>

				</View>

					<View style={{paddingTop: 0, alignItems:'center'}}>
						<Text style={{width:'90%', color:'#fff', fontSize: 12}}>
							{data[this.state.legend].story}
						</Text>
					</View>
					</View>
					</TouchableWithoutFeedback>
				</ScrollView>
				
			);
		}else if(this.state.renderMode === 'skins'){
			//300x497, 100x166
			skinWidth = winWidth * .5;
			skinHeight = skinWidth * 1.85;

			bttnWidth = winWidth * .4;
			bttnHeight = bttnWidth * .14;
			return(
					<View style={{flexDirection: 'row'}}>
						<Image 	style={{width: skinWidth, height: skinHeight}}
										source={Images[this.state.legend][this.state.skin]}  />

						<ScrollView style={{height:skinHeight}}>
							<Skins 
								data={data[this.state.legend].SKINS}
								renderSkin={this.renderSkin.bind(this)}
							/>
						</ScrollView>
					</View>
			);
		}else if(this.state.renderMode === 'banners'){
			return(
				<Text>BANNERS COMING SOON</Text>
			);
		}
	}

	renderSkin(item){
		//console.log('-'+skinData['tst']+'/'+tmp);

		return ( 
				<CollectionButton key={item.name} text={item.name} clr={item.color} lock={false} /> 
		);
	}

  render() {
		return (
			<ImageBackground
                style={{width: '100%', height: '100%', backgroundColor: '#231f20'}}
                source={require('../assets/bg_red.jpg')} 
            >
				<Ad />
				<View>
					{this.renderHeader()}	
					{this.renderBody()}	
				</View>
				
			</ImageBackground>
		);
	}
}

export default LegendsScreen;