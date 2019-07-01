import React from 'react';
import { ImageBackground } from 'react-native';
import Styles from '../constants/style';

const Background = ({ children, style, ...props }) => (
    <ImageBackground
        source={require('../../assets/background.jpg')}
        style={Styles.hocWrapper}
    >
        {children}
    </ImageBackground>
);

export default Background;