import { width as winWidth, height as winHeight } from 'src/utils/Dimensions';

const avatarSize = winWidth * .1;

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
    title: {
        fontWeight: 'bold', 
        fontSize: 12
    },
    itemContainer: {
        flexDirection: 'row', 
        padding: 5,
        width: winWidth * .9,
    },
    itemWrapper: {
        flexDirection: 'row',
        padding: 5,
    },
    postWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
    },
    userDetail: {
        fontSize: 10,
        paddingLeft: 5,
        color: '#999'
    },
    postDetail: {
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
    postDivider: {
        height: 1,
        width: winWidth * .8,
        backgroundColor: '#999',
        marginTop: 5,
        marginLeft: 5,
    },
    commentDivider: {
        height: 1,
        backgroundColor: '#999',
        marginTop: 5,
        marginLeft: 5,
    },
    commentLabel: {
        fontSize: 10,
        paddingLeft: 5,
        color: '#007aff'
    },
    removeLabel: {
        fontSize: 10,
        paddingLeft: 5,
        color: '#920000'
    },
    smallPad: {
        padding: 5,
    },
    actionBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: winWidth * .8,
        marginLeft: 5
    },
    createPost: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
    },
    modalWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    newPostTitle: {
        height: 40,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        width: winWidth * .9,
        marginTop: 5,
    },
    newPostBody: {
        height: 100,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        marginTop: 5,
    },
    buttonWrapper: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    },
};