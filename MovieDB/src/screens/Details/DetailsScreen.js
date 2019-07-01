import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, SafeAreaView, Image, ScrollView, TextInput } from 'react-native';
import Background from '../../hoc/Background';
import { imagePath } from '../../api/host';
import Styles from '../../constants/style';

export default class DetailsScreen extends PureComponent {

    render(){
        const itemId = this.props.navigation.getParam('id');
        let movie = [];
        switch(this.props.viewState){
            case 'popular':
                movie = this.props.popular.find(obj => {return obj.id === itemId});
                break;
            case 'top_rated':
                movie = this.props.topRated.find(obj => {return obj.id === itemId});
                break;
            case 'coming_soon':
                movie = this.props.comingSoon.find(obj => {return obj.id === itemId});
                break;
            case 'search_results':
                movie = this.props.searchResults.find(obj => {return obj.id === itemId});
                break;
            case 'now_playing':
            default:
                movie = this.props.nowPlaying.find(obj => {return obj.id === itemId});
                break;
        };
    
        return(
            <Background>
                <SafeAreaView>
                    <View style={Styles.detailsContainer}>
                        <ImageBackground
                            source={{ uri: imagePath+movie.poster_path}}
                            style={Styles.detailsBackgroundPoster}
                        >
                            <ImageBackground
                                source={require('../../../assets/poster_overlay.png')}
                                style={Styles.detailsPosterOverlay}
                            >
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Home')}
                                >
                                    <Image
                                        source={require('../../../assets/back_arrow.png')}
                                        style={Styles.backButton}
                                    />
                                </TouchableOpacity>
                                <View style={Styles.detailsTextWrapper}>
                                    <View style={Styles.detailsTextLift}>
                                        <Text style={Styles.detailsTitle}>
                                            {movie.title}
                                        </Text>
                                        <View style={Styles.detailsSpaceApart} >
                                            <View style={Styles.flexDirRow}>
                                                <Image 
                                                    source={require('../../../assets/stars_icon.png')}
                                                    style={Styles.starIcons}
                                                />
                                                <Text style={Styles.detailsText}>{movie.vote_average}</Text>
                                            </View>
                                            <Text style={Styles.detailsText}>{new Date(movie.release_date).toDateString()}</Text>
                                        </View>
                                        <View style={Styles.scrollHeight}>
                                            <ScrollView>
                                                <Text style={Styles.detailsOverview}>{movie.overview}</Text>
                                            </ScrollView>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </ImageBackground>
                    </View>
                </SafeAreaView>
            </Background>
        );
    }
};