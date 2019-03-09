import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Ad from './Ad';
import * as data from './constants/weapons.json';
import Skins from './Skins';
import Images from './constants/weaponsImages';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;
const iconWidth = winWidth*.6;
const menuWidth = winWidth*.3;
const iconHeight = iconWidth*.53; 
const menuHeight = menuWidth*.53; 
const textWidth = winWidth*.75;

class WeaponsScreen extends Component {
	constructor(props) {
    super(props)
    this.state = {
			renderMenu: false,
			weapon: 'ASSAULT',
			skin: 'factory',
			type: 'FLATLINE',
		}
	}
	
	selectWeapon(weapon) {
		firstType = '';
		if(weapon === 'ASSAULT'){
			firstType = 'FLATLINE';
		}else if(weapon === 'SNIPER'){
			firstType = 'SCOUT';
		}else if(weapon === 'SHOTGUN'){
			firstType = 'EVA8';
		}else if(weapon === 'PISTOL'){
			firstType = 'P2020';
		}else if(weapon === 'LMG'){
			firstType = 'DEVOTION';
		}else if(weapon === 'SMG'){
			firstType = 'ALTERNATOR';
		}
		this.setState({weapon:weapon, renderMenu: false, type: firstType, skin: 'factory'});
	}

	openMenu() {
		this.setState({renderMenu: true});
	}

	changeType(wpnType) {
		this.setState({type: wpnType, skin: 'factory'});
		this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true});
	}

	changeSkin(skin) {
		this.setState({skin: skin});
	}

	closeMenu(){
		if(this.state.renderMenu){
			this.setState({renderMenu: false});
		}
	}


	weaponMenu(weapon) {
		return(
				<TouchableOpacity  style={{}} onPress={() => this.selectWeapon(weapon)}>
					<Image style={{width: menuWidth, height: menuHeight}}
							source={Images[weapon]['menu_icon']} />
				</TouchableOpacity>
			);
	
	}

	currentWeapon() {
		return(
			<TouchableOpacity  style={{}} onPress={() => this.openMenu()}>
				<Image style={{width: iconWidth, height: iconHeight}}
						source={Images[this.state.weapon]['active_icon']} />
			</TouchableOpacity>
		);
	}

	renderHeader() {
		if(this.state.renderMenu){
			return(
				<View style={{paddingBottom:10, paddingTop:10}}>
				<View style={{width:winWidth, flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 0, paddingTop: 0}}>
						{this.weaponMenu('ASSAULT')}
						{this.weaponMenu('SMG')}
						{this.weaponMenu('LMG')}
				</View>
				<View style={{width:winWidth, flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 0, paddingTop: 0}}>
					{this.weaponMenu('SNIPER')}
					{this.weaponMenu('SHOTGUN')}
					{this.weaponMenu('PISTOL')}
				</View>
				</View>
			)
		}else{
			return(
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10}}>
						{this.currentWeapon()}
						<Text style={{fontSize: 8, color: '#fff', marginTop:-10, alignSelf: 'center'}}>(Tap to change Weapon)</Text>
					</View>
					
					<View style={{paddingTop: 10}}>
							{this.renderButtonGroup()}
					</View>
				</View>
			)
		}
	}

	renderButton(bttn, uid){
		if(this.state.type === uid){
			return(
			<TouchableOpacity  style={{paddingBottom: 5}} onPress={() => this.changeType(uid)}>
				<View style={{height:25, width: winWidth*.3, paddingTop: 3, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#c80000', borderColor: '#ff6000' }}>
					<Text style={{color:'#ffffff', fontSize: 12}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}else{
			return(
			<TouchableOpacity  style={{paddingBottom: 5}} onPress={() => this.changeType(uid)}>
				<View style={{height:25, width: winWidth*.3, paddingTop: 3, marginRight: 5,alignItems: 'center', borderBottomWidth: 5,
					backgroundColor: '#444444', borderColor: '#a2a2a2' }}>
					<Text style={{color:'#ffffff', fontSize: 12}}>
						{bttn.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
			);
		}
	}

	renderButtonGroup(){
		if(this.state.weapon === 'ASSAULT'){
			return (
				<View>
				{this.renderButton('FLATLINE', 'FLATLINE')}
				{this.renderButton('HEMLOK', 'HEMLOK')}
				{this.renderButton('R-301', 'R301')}
				{this.renderButton('HAVOC', 'HAVOC')}
				</View>
			);
		}else if(this.state.weapon === 'SNIPER'){
			return (
				<View>
				{this.renderButton('G7 SCOUT', 'SCOUT')}
				{this.renderButton('LONGBOW', 'LONGBOW')}
				{this.renderButton('TRIPLE TAKE', 'TRIPLETAKE')}
				{this.renderButton('KRABER', 'KRABER')}
				</View>
			);
		}else if(this.state.weapon === 'SHOTGUN'){
			return (
				<View>
				{this.renderButton('EVA-8 Auto', 'EVA8')}
				{this.renderButton('PEACEKEEPER', 'PEACEKEEPER')}
				{this.renderButton('MASTIFF', 'MASTIFF')}
				{this.renderButton('MOZAMBIQUE', 'MOZAMBIQUE')}
				</View>
			);
		}else if(this.state.weapon === 'PISTOL'){
			return (
				<View>
				{this.renderButton('P2020', 'P2020')}
				{this.renderButton('RE-45', 'RE45')}
				{this.renderButton('WINGMAN', 'WINGMAN')}
				</View>
			);
		}else if(this.state.weapon === 'LMG'){
			return (
				<View>
				{this.renderButton('DEVOTION', 'DEVOTION')}
				{this.renderButton('SPITFIRE', 'SPITFIRE')}
				</View>
			);
		}else if(this.state.weapon === 'SMG'){
			return (
				<View>
				{this.renderButton('ALTERNATOR', 'ALTERNATOR')}
				{this.renderButton('R-99', 'R99')}
				{this.renderButton('PROWLER', 'PROWLER')}
				</View>
			);
		}
	}

	renderSkin(item){
		clr = item.color;
		if(item.skin === this.state.skin){
			return (
				<TouchableOpacity onPress={() => this.changeSkin(item.skin)} key={item.name}>
					<ImageBackground
							style={{width: bttnWidth, height: bttnHeight}}
							source={require('../assets/button-selected.png')} 
					>
						<Text style={{color: clr, fontSize: 10, fontWeight: 'bold', paddingLeft: 5, paddingTop: 4 }}>{item.name}</Text>
					</ImageBackground>
				</TouchableOpacity>
			);
		}else{
			return (
				<TouchableOpacity onPress={() => this.changeSkin(item.skin)} key={item.name}>
					<ImageBackground
							style={{width: bttnWidth, height: bttnHeight}}
							source={require('../assets/button.png')} 
					>
						<Text style={{color: clr, fontSize: 10, fontWeight: 'bold', paddingLeft: 5, paddingTop: 4 }}>{item.name}</Text>
					</ImageBackground>
				</TouchableOpacity>
			);
		}
	}

	renderAttachment(att){
		if(att === 'optic'){
			if(data[this.state.type].OPTS.optic){
				return(
					<Image 	style={{width: 30, height: 30, marginRight: 5}} 
										source={require('../assets/armory/att_optics.png')}  />
				);
			}else{
				return null;
			}
		}else if(att === 'mag'){
			if(data[this.state.type].OPTS.mag){
				return(
					<Image 	style={{width: 30, height: 30, marginRight: 5}} 
										source={require('../assets/armory/att_mag.png')}  />
				);
			}else{
				return null;
			}
		}else if(att === 'barrel'){
			if(data[this.state.type].OPTS.barrel){
				return(
					<Image 	style={{width: 30, height: 30, marginRight: 5}} 
										source={require('../assets/armory/att_barrel.png')}  />
				);
			}else{
				return null;
			}
		}else if(att === 'stock'){
			if(data[this.state.type].OPTS.stock){
				return(
					<Image 	style={{width: 30, height: 30, marginRight: 5}} 
										source={require('../assets/armory/att_stock.png')}  />
				);
			}else{
				return null;
			}
		}else if(att === 'hopup'){
			if(data[this.state.type].OPTS.hopup){
				return(
					<Image 	style={{width: 30, height: 30, marginRight: 5}} 
										source={require('../assets/armory/att_hopup.png')}  />
				);
			}else{
				return null;
			}
		}
	}

	renderBody(){
			skinWidth = winWidth*.5;
			skinHeight = skinWidth*.55;
			bttnWidth = winWidth*.4;
			bttnHeight = bttnWidth*.14;
			return(
				<TouchableWithoutFeedback onPress={() => this.closeMenu()}>
					<View style={{flexDirection: 'row', paddingLeft: 10}}>
						<View style={{paddingRight:10}}>
							<Image 	style={{width: skinWidth, height: skinHeight, marginBottom: 10}} 
										source={Images[this.state.type][this.state.skin]}  />
							<ImageBackground
                style={{width: skinWidth, height: skinWidth*.93, alignContent: 'center', paddingTop:5}}
                source={require('../assets/armory/wpn_stats_bg.png')} >

								<View style={{width: skinWidth, alignItems: 'center', paddingBottom: 5}}>
									<Text style={{color:'#fff', fontSize:12, fontWeight:'bold', alignSelf: 'center'}}>{data[this.state.type].name}</Text>
								</View>

								<View style={{flexDirection: 'row', paddingLeft: 10}}>
									<Text style={{color:'#fff', fontSize:10,width: skinWidth/2}}>Ammo Type </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.type].ammo}</Text>
								</View>

								<View style={{flexDirection: 'row', paddingLeft: 10}}>
									<Text style={{color:'#fff', fontSize:10, width: skinWidth/2}}>Body Damage </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.type].body}</Text>
								</View>

								<View style={{flexDirection: 'row', paddingLeft: 10}}>
									<Text style={{color:'#fff', fontSize:10, width: skinWidth/2}}>Head Damage </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.type].head}</Text>
								</View>

								<View style={{flexDirection: 'row', paddingLeft: 10}}>
									<Text style={{color:'#fff', fontSize:10, width: skinWidth/2}}>Rate of Fire </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.type].rof}</Text>
								</View>

								<View style={{flexDirection: 'row', paddingLeft: 10}}>
									<Text style={{color:'#fff', fontSize:10, width: skinWidth/2}}>Magazine Size </Text>
									<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{data[this.state.type].mag}</Text>
								</View>

								<View style={{flexDirection: 'row', width: skinWidth, paddingLeft: 10, paddingTop: 5}}>
									{this.renderAttachment('optic')}
									{this.renderAttachment('mag')}
									{this.renderAttachment('barrel')}
									{this.renderAttachment('stock')}
									{this.renderAttachment('hopup')}
								</View>


							</ImageBackground>
							
						</View>
						
						<ScrollView ref='_scrollView' style={{height:skinHeight+10+(skinWidth*.93)}}>
							<Skins 
								data={data[this.state.type].SKINS}
								renderSkin={this.renderSkin.bind(this)}
							/>
						</ScrollView>
					</View>
					</TouchableWithoutFeedback>
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

export default WeaponsScreen;