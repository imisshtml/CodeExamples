import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from './constants/styles';
import Ad from './Ad';
import api from './connect';

const winWidth = Dimensions.get('window').width;
const iconWidth = winWidth*.5;
const iconHeight = iconWidth*.66; 
const textWidth = winWidth*.75;

class HomeScreen extends Component {
    async componentDidMount() {
        AsyncStorage.setItem('APEX_ad_timer', new Date().toLocaleTimeString());
		const test = await api.fetchData('lol');
		console.warn(test);
	}


    render() {
        return (
            <ImageBackground
                style={{width: '100%', height: '100%', backgroundColor: '#231f20'}}
                source={require('../assets/bg_red.jpg')} 
            >
                <Ad />
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 10}}>
                        <TouchableOpacity style={{}}
                            onPress={() => this.props.navigation.navigate('LEGENDS')}>
                            <Image
                                style={{width: iconWidth, height: iconHeight}}
                                source={require('../assets/button_legends.png')} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:-40}}
                            onPress={() => this.props.navigation.navigate('WEAPONS')}>
                            <Image
                                style={{width: iconWidth, height: iconHeight}}
                                source={require('../assets/button_weapons.png')} 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{}}
                            onPress={() => this.props.navigation.navigate('TIPS')}>
                            <Image
                                style={{width: iconWidth, height: iconHeight}}
                                source={require('../assets/button_tips.png')} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:-40}}
                            onPress={() => this.props.navigation.navigate('MAPS')}>
                            <Image
                                style={{width: iconWidth, height: iconHeight}}
                                source={require('../assets/button_maps.png')} 
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{position:'absolute', bottom: 0, width: '100%', alignItems: 'center',
        justifyContent: 'center',}}>
                    <Text style={{width: textWidth, fontSize: 9, paddingBottom:10, color: '#666666'}}>
                    APEX Legends Companion is not affiliated with Respawn Entertainement or EA Sports. This app is purely for entertainment and to help our fellow Legends excel within the game.
                    </Text>
                    <Text style={{width: textWidth, fontSize: 9, paddingBottom:10, color: '#666666', textAlign: 'center'}}>
                        APEX Legends Companion App v1.0.0
                    </Text>
                </View>
                
            </ImageBackground>
        );
    }
}

export default HomeScreen;
