import { Platform } from 'react-native';
import { colors, fonts, padding, dimensions } from 'src/styles/base.js';

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
    tallContainer: {
        height: '100%', 
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        ...Platform.select({
            android: {
              paddingTop: padding.android
            }
          }),
    },
    fullWidth: {
        width: dimensions.fullWidth
    },
    subtle: {
        color: colors.subtle
    },
    mediumFont: {
        fontSize: fonts.md
    },
    boldFont: {
        fontWeight: 'bold'
    }
}