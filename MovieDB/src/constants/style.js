import { Platform } from 'react-native';
import { 
    winWidth, 
    winHeight, 
    dropdownIconHeight, 
    dropdownIconWidth,
    cardDetailHeight,
    cardDetailWidth, 
    arrowHeight,
    arrowWidth,
    starsHeight,
    starsWidth,
    cardWidth,
    cardHeight,
} from './dimensions';

export default styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            android: {
              paddingTop: 24
            }
          }),
    },
    innerContainer: {
        height:'100%', 
        width: winWidth, 
        alignItems: 'center'
    },
    maxWidth: {
        width:winWidth
    },
    flexDirRow: {
        flexDirection: 'row' 
    },
    boldText: {
        fontWeight: 'bold',
    },
    customPickerWrapper: {
        width:winWidth, 
        alignItems: 'center',
        alignContent: 'flex-start', 
        flexDirection: 'row', 
        padding: 10
    },
    customPickerLabel: {
        fontSize:18, 
        fontWeight: 'bold'
    },
    customPickerIcon: {
        width: dropdownIconWidth, 
        height: dropdownIconHeight 
    },
    detailsContainer: {
        height: '100%', 
        alignContent: 'flex-start',
        ...Platform.select({
            android: {
              paddingTop: 24
            }
          }),
    },
    detailsBackgroundPoster: {
        width: cardDetailWidth, 
        height: cardDetailHeight, 
        alignItems: 'flex-start', 
        alignSelf:'flex-start',
        justifyContent: 'flex-start'
    },
    detailsPosterOverlay: {
        width: cardDetailWidth, 
        height: cardDetailHeight, 
        alignItems: 'flex-start', 
        alignSelf:'flex-start', 
        justifyContent: 'flex-start', 
        padding: 10
    },
    detailsTextWrapper:{
        height: winHeight-(cardDetailHeight*.40), 
        width: winWidth, 
        position:'absolute', 
        top:cardDetailHeight*.8, 
        backgroundColor: '#011144', 
        paddingLeft:10, 
        paddingRight:10
    },
    backButton: {
        width: arrowWidth, 
        height: arrowHeight
    },
    detailsTitle: {
        color:'#ffffff', 
        fontSize:20, 
        fontWeight: 'bold', 
        paddingBottom: 5
    },
    detailsTextLift: {
        marginTop:-80
    },
    detailsSpaceApart:{
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    detailsText: {
        fontSize:14, 
        color: '#ffffff'
    },
    detailsOverview: {
        color:'#ffffff', 
        fontSize:16, 
        paddingTop:5
    },  
    starIcons: {
        width: starsWidth, 
        height: starsHeight
    },
    movieThumbnail: {
        width: cardWidth, 
        height: cardHeight
    },
    movieDetailWrapper: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    movieCardWrapper: {
        backgroundColor: 'white', 
        width: cardWidth, 
        padding: 2, 
        alignItems: 'center', 
        borderTopColor: '#a2a2a2', 
        borderTopWidth: .5
    },
    smallFont: {
        fontSize:10
    },
    smallPad: {
        padding:5
    },
    hocWrapper: {
        width: '100%', 
        height: '100%', 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollHeight: {
        height: winHeight - (cardDetailHeight*.8)
    }
}