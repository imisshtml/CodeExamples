import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Text, AsyncStorage } from 'react-native';

import buttonCollected from '../assets/button-unlocked.png';
import buttonLocked from '../assets/button-locked.png';

var lock = false;

class collectionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemCollected: false,
        }
    }

    componentWillMount(){
        var value =  AsyncStorage.getItem(this.props.text);
        value.then((e)=>{
            this.setState({
                itemCollected: e
            });
            lock = e;
        })
    }

    render() {
       var imageSource = this.state.itemCollected ? buttonCollected : buttonLocked;
        const { text, clr } = this.props;
        return (
            <TouchableOpacity onPress={ () => this.saveState() } >
                <ImageBackground style={{width: 200, height: 28}} source={ imageSource } >
                    <Text style={{color: clr, paddingLeft: 5, paddingTop: 4}}>{ text }</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    saveState() {
        lock = !lock;
        AsyncStorage.setItem(this.props.text, JSON.stringify(lock));
        this.setState({itemCollected: lock});
    }

    _storeData = async () => {
    try {
        await AsyncStorage.setItem(this.props.text, JSON.stringify(lock));
    } catch (error) {
    }
    };

}

export default collectionButton;