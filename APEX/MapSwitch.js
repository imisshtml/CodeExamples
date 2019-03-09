import React, { Component } from 'react'
import { View, Switch, Text, Dimensions } from 'react-native'

const winWidth = Dimensions.get('window').width;

export default MapSwitch = (props) => {
   return (
    <View style={{alignContent: 'space-around' }}>
        <View style={{flexDirection: 'row'}} >
            <Text style={{fontWeight: 'bold',  color: '#ffffff' }}>Supplies</Text>
            <Switch
                onValueChange = {props.toggleLoot}
                value = {props.viewLoot} />
        </View>
        <View  style={{width: winWidth*.33}}>
            <Text style={{fontWeight: 'bold', fontSize: 12, color: '#ffffff' }}>Res Points</Text>
            <Switch style={{width: 100}}
                onValueChange = {props.toggleRes}
                value = {props.viewRes} />
        </View>
        <View  style={{width: winWidth*.33}}>
            <Text style={{fontWeight: 'bold', fontSize: 12, color: '#ffffff' }}>Nessie</Text>
            <Switch
                onValueChange = {props.toggleNessie}
                value = {props.viewNessie} />
        </View>
    </View>
   )
}
