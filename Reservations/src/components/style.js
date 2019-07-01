import { Platform } from 'react-native';
import { padding, dimensions, margin, colors } from 'src/styles/base.js';

export default styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            android: {
              paddingTop: padding.android
            }
          }),
    },
    fullWidth: {
        width: dimensions.fullWidth
    },
    pushUp: {
        marginTop: margin.lg
    },
    black: {
        color: colors.black
    },
    secondary: {
        color: colors.secondary
    },
    button: {
        alignSelf:'center', 
        width: dimensions.fullWidth/2, 
        alignContent: 'center', 
        justifyContent: 'center', 
        marginTop: margin.lg, 
        backgroundColor: colors.primary
    },
    buttonText: {
        color: colors.white, 
        fontWeight: 'bold'
    },
    warning: {
        backgroundColor: colors.warning
    },
    backgroundWrapper: {
        width: '100%', 
        height: '100%', 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteBackground: {
        backgroundColor: colors.white
    },
    buttonIcon: {
        marginRight:4, 
        color: colors.subtle
    },
    primaryBackground: {
        backgroundColor: colors.primary
    }
}