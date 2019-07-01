import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { imagePath } from '../api/host';
import Styles from '../constants/style';

const MovieCard = props => {

    const imageComp = props.data.poster_path != null ? 
        <Image 
            source={{ uri: imagePath+props.data.poster_path}}
            style={Styles.movieThumbnail}
        /> : 
        <Image 
            source={require('../../assets/missing_poster.png')}
            style={Styles.movieThumbnail}
        />;
        
    const ratingComp = Date.parse(props.data.release_date) > Date.parse(new Date()) ? 
        <View
            style={Styles.movieDetailWrapper}
        >
            <Text style={Styles.smallFont}>{new Date(props.data.release_date).toDateString()}</Text>
        </View> :
        <View
            style={Styles.movieDetailWrapper}
            >
            <Image 
                source={require('../../assets/stars_icon.png')}
                style={Styles.starIcons}
            />
            <Text style={Styles.smallFont}>{props.data.vote_average}</Text>
        </View>;

    return ( 
        <View style={Styles.smallPad}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Details', {id:props.data.id})}>
                {imageComp}
                <View style={Styles.movieCardWrapper}>
                    <Text style={Styles.smallFont} numberOfLines={1}>{props.data.title}</Text>
                    {ratingComp}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MovieCard;