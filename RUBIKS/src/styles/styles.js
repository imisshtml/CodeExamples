export default styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    panelContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    homeScreenPanels: {
        height:80, 
        width:'100%', 
        marginBottom:25,
        shadowColor:'#000000', 
        shadowOffset:{ width: 0, height: 2 }, 
        shadowOpacity:.5, 
        shadowRadius:2,
        flexDirection: 'row',
    },
    patternCube: {

    },
    patternRows: {
        width:'30%', alignItems:'center'
    },
    patternRow: {
        flexDirection: 'row', backgroundColor:'#000000'
    },
    patternBlock: {
        width:'100%', backgroundColor:'#fcfcfc', height:80, flexDirection: 'row',
        alignItems: 'center', paddingTop:0,
        marginBottom:25, shadowColor:'#000000', shadowOffset:{ width: 0, height: 2 }, 
        shadowOpacity:.5,shadowRadius:2
    },
    patternBlock2: {
        width:'100%', backgroundColor:'#fcfcfc', height:80, flexDirection: 'row',
        position:'absolute', flex:1, alignItems: 'center', paddingTop:0,
        marginBottom:25, shadowColor:'#000000', shadowOffset:{ width: 0, height: 2 }, 
        shadowOpacity:.5,shadowRadius:2
    },
    patternAvatar: {
        flexDirection: 'row', alignItems: 'center', width:'35%', justifyContent: 'space-evenly'
    },
    homeAvatar: {
        flexDirection: 'row', alignItems: 'center', height: 80, width:'50%', justifyContent: 'space-evenly'
    },
    homeStats: {
        alignItems: 'center', height: 80, width:'50%', justifyContent: 'space-around'
    },
    homeGamemode: {
        height: 80, justifyContent: 'space-around', paddingLeft: 10, paddingTop: 10
    },
    homeScreenFirstPanel: {
        paddingLeft:10, marginRight:10,justifyContent:'space-evenly',alignSelf:'flex-start', height:'100%',
    },
    homeScreenSecondPanel: {
        justifyContent:'center', alignSelf:'flex-end', height:'100%', paddingRight:10,
    }
};
