import React, { Component } from 'react';
import { View, Button, ImageBackground, Image } from 'react-native';
import { Constants, Svg } from 'expo';
import Panel3x3 from './Panel3x3';
import styles from './styles/styles';

const DATA = [
    { id: 1, color: '#ff8080' },
    { id: 2, color: '#80ff80' },
    { id: 3, color: '#ffff80' },
    { id: 4, color: '#80ffff' },
    { id: 5, color: '#8080ff' },
    { id: 6, color: '#ff80ff' },
  ];

class PlayOnline extends Component {
	renderCube(item) {
        return (
            <View 
                key={item.id}
                style={{
                    width:60,
                    height:60,
                    backgroundColor:item.color,
                    borderRadius:5
                }} 
            />
        );
    }

    render() {
        return (
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/background_white.png')} 
            >
                <ImageBackground
                    style={{flex:1,width:undefined, height:undefined, alignItems: 'center',
                    justifyContent: 'center'}}
                    source={require('../assets/panel_3x3.png')}
                    resizeMode="contain"
                >
                    
                    <Panel3x3
                        data={DATA}
                        renderCube={this.renderCube}
                        />
                        <Button
                        title="test"
                        onPress={() => this.props.navigation.navigate('Auth')}
                        />
                 
                </ImageBackground>
                
          </ImageBackground>
        );
    }
}

export default PlayOnline;