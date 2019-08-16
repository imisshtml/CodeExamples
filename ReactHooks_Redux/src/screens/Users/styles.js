import { width as winWidth, height as winHeight } from 'src/utils/Dimensions';

const avatarSize = winWidth * .2;

export default styles = {
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    avatar: {
        width: avatarSize, 
        height: avatarSize, 
        borderRadius: avatarSize / 2,
    },
    itemContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 10,
        alignItems: 'center'
    },
    stackWrapper: {
        width: winWidth * .6,
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    itemWrapper: {
        flexDirection: 'row',
    },
    userDetail: {
        fontSize: 12,
        paddingLeft: 5,
    },
    italic: {
        fontStyle: 'italic',
    },
    activityIndicator: {
        alignSelf: "center",               
    },
    divider: {
        height: 1,
        width: winWidth - 10,
        marginLeft: 10,
        backgroundColor: '#d3d3d3',
    },
    userName: {
        fontWeight: 'bold', 
        fontSize: 16,
    }

};