import { Platform } from 'react-native';
import { colors, fonts, padding, dimensions } from 'src/styles/base.js';

export default styles = {
    listContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
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
    searchbar: {
        height: 80, 
        width: dimensions.fullWidth, 
        marginTop: -45
    },
    fullWidth: {
        width: dimensions.fullWidth
    },
    subtle: {
        color: colors.subtle
    },
    subFont: {
        fontSize: fonts.xs,
        fontStyle: 'italic'
    },
    boldFont: {
        fontWeight: 'bold'
    }
}