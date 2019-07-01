import { Platform } from 'react-native';
import { padding } from 'src/styles/base.js';

export default styles = {
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        ...Platform.select({
            android: {
              paddingTop: padding.android
            }
          }),
    },
}