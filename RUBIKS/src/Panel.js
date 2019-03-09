import React, { Component } from 'react';
import { View, Button, ImageBackground, Image } from 'react-native';

const DATA = [
{ id: 1, color: '#ff8080' },
{ id: 2, color: '#80ff80' },
{ id: 3, color: '#ffff80' },
{ id: 4, color: '#80ffff' },
{ id: 5, color: '#8080ff' },
{ id: 6, color: '#ff80ff' },
];

class Panel extends Component {
    render() {
        return (
            <Image
                style={{flex:1,width:300, height:300}}
                source={require('../assets/panel_3x3.png')}
                resizeMode='contain'
            >    
            </Image>
        );
    }
}

export default Panel;