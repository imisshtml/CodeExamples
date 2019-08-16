import { width as winWidth, height as winHeight } from 'src/utils/Dimensions';

export default styles = {
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    userDetail: {
        fontSize: 10,
        paddingLeft: 5,
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
    title: {
        fontWeight: 'bold', 
        fontSize: 12,
        paddingLeft: 5,
    },
    todoWrapper: {
        width: winWidth * .8,
    }

};