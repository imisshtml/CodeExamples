import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'src/styles/base';
import Styles from './style';

const Background = ({ children, style, ...props }) => (
    <LinearGradient 
        colors={[colors.gradientOne, colors.gradientTwo]} 
        style={Styles.backgroundWrapper}
    >
        {children}
    </LinearGradient>
);

export default Background;