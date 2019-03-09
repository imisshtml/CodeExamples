import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './constants/styles';
import Ad from './Ad';

const winWidth = Dimensions.get('window').width;
const iconWidth = winWidth*.3;
const iconHeight = iconWidth*.6;
const textWidth = winWidth*.6;

class HomeScreen extends Component {
    
    render() {
        return (
            <ImageBackground
                style={{width: '100%', height: '100%', backgroundColor: '#231f20'}}
                source={require('../assets/bg_mixed.png')} 
            >
                <Ad />
                <View style={styles.container}>


                    <Image
                        style={{width:winWidth*.8, height: (winWidth*.8)*.41, marginBottom: 20 }}
                        source={require('../assets/small_logo.png')} 
                    />

                    {/* POSITIONING BASICS */}
                    <TouchableOpacity
                        style={{margin:0, paddingLeft:30}}
                        onPress={() => this.props.navigation.navigate('TRAIN')}
                    >
                        <View style={[styles.homeScreenPanels, {justifyContent:'space-between',height:80,
                                        backgroundColor:'rgba(23, 96, 147, 1)'}]}
                        >
                            <View style={[styles.homeScreenFirstPanel,{borderWidth: 0,}]}>
                                <Image
                                    style={{width: iconWidth, height: iconWidth*.6}}
                                    source={require('../assets/table_icon.png')} 
                                />
                            </View>
                            
                            <View style={[styles.homeScreenSecondPanel,{borderWidth: 0,}]}>
                                <Text style={{color:'#ffffff', fontWeight: 'bold'}}>Positioning Basics</Text>
                                <Text style={{color:'#ffffff', width: textWidth}}>
                                    Study the basics of positioning to increase your skill at the table.
                                </Text>
                                
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* QUIZ */}
                    <TouchableOpacity
                        style={{margin:0, paddingLeft:30}}
                        onPress={() => this.props.navigation.navigate('QUIZ')}
                    >
                        <View style={[styles.homeScreenPanels, {justifyContent:'space-between',height:80,
                                        backgroundColor:'rgba(23, 96, 147, 1)'}]}
                            onPress={() => this.props.navigation.navigate('QUIZ')}
                        >
                            <View style={[styles.homeScreenFirstPanel,{borderWidth: 0,}]}>
                                <Image
                                    style={{width: iconWidth, height: iconWidth*.56}}
                                    source={require('../assets/cards_icon.png')} 
                                />
                            </View>
                            
                            <View style={[styles.homeScreenSecondPanel,{borderWidth: 0,}]}>
                                <Text style={{color:'#ffffff', fontWeight: 'bold'}}>Test Your Knowledge</Text>
                                <Text style={{color:'#ffffff', width: textWidth}}>
                                    Test your skills to see if you know the best decision to make for each hand
                                </Text>
                                
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* TIPS */}
                    <TouchableOpacity
                        style={{margin:0, paddingLeft:30}}
                        onPress={() => this.props.navigation.navigate('TIPS')}
                    >
                        <View style={[styles.homeScreenPanels, {justifyContent:'space-between',height:80,
                                        backgroundColor:'rgba(23, 96, 147, 1)'}]}
                            onPress={() => this.props.navigation.navigate('QUIZ')}
                        >
                            <View style={[styles.homeScreenFirstPanel,{borderWidth: 0,}]}>
                                <Image
                                    style={{width: iconWidth, height: iconWidth*.6}}
                                    source={require('../assets/chips_icon.png')} 
                                />
                            </View>
                            
                            <View style={[styles.homeScreenSecondPanel,{borderWidth: 0,}]}>
                                <Text style={{color:'#ffffff', fontWeight: 'bold'}}>Good Habits & Lingo</Text>
                                <Text style={{color:'#ffffff', width: textWidth}}>
                                    Test your skills to see if you know the best decision to make for each hand
                                </Text>
                                
                            </View>
                        </View>
                    </TouchableOpacity>


                </View>
            </ImageBackground>
        );
    }
}

export default HomeScreen;