import React, { PureComponent } from 'react';
import { View, FlatList, SafeAreaView, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { AppLoading } from 'expo';
import { cardWidth, cardHeight } from '../../constants/dimensions';
import Background from '../../hoc/Background';
import MovieCard from '../../components/MovieCard';
import CustomPicker from '../../components/CustomPicker';
import Styles from '../../constants/style';
import api from '../../api/connect';

export default class HomeScreen extends PureComponent {
    state = {
        search:'',
    };

    componentDidMount() {
		this.loadNowPlaying();
    };

    async updateSearch() {
        if(this.state.search.length > 0 && (this.props.searchPage < this.props.searchMaxPage || this.props.searchMaxPage === 0)){
            const data = await api.fetchData('query', this.props.searchPage+1, this.state.search);
            this.props.storeSearch(data);
        }
    };

    async loadNowPlaying() {
        if(this.props.nowPlayingPage < this.props.nowPlayingMaxPage || this.props.nowPlayingMaxPage === 0){
            const data = await api.fetchData('now_playing', this.props.nowPlayingPage+1);
            this.props.storeNowPlaying(data);
        }
    };

    async loadPopular() {
        if(this.props.popularPage < this.props.popularMaxPage || this.props.popularMaxPage === 0){
            const data = await api.fetchData('popular', this.props.popularPage+1);
            this.props.storePopular(data);
        }
    };

    async loadTopRated() {
        if(this.props.topRatedPage < this.props.topRatedMaxPage || this.props.topRatedMaxPage === 0){
            const data = await api.fetchData('top_rated', this.props.topRatedPage+1);
            this.props.storeTopRated(data);
        }
    };

    async loadComingSoon() {
        if(this.props.comingSoonPage < this.props.comingSoonMaxPage || this.props.comingSoonMaxPage === 0){
            const data = await api.fetchData('upcoming', this.props.comingSoonPage+1);
            const today = new Date();
            const scrubData = data['results'].filter(function(movie) {
                return Date.parse(movie.release_date) > Date.parse(today);
              });
            this.props.storeComingSoon(scrubData, data['total_pages']);
        }
    };

    renderCard= ({ item: movie }) => {
        return (<MovieCard data={movie} navigation={this.props.navigation}/>)
    };

    getItemLayout(data, index) {
        return {length: cardHeight, offset: cardWidth * index, index}
    };

    viewData(){
        switch(this.props.viewState){
            case 'search_results':
                return this.props.searchResults;
            case 'popular':
                return this.props.popular;
            case 'top_rated':
                return this.props.topRated;
            case 'coming_soon':
                return this.props.comingSoon;
            case 'now_playing':
            default:
                return this.props.nowPlaying;
        }
    }

    loadMore(view) {
        if( view === 'now_playing'){
            this.loadNowPlaying();
        }else if(view === 'popular'){
            this.loadPopular();
        }else if(view === 'top_rated'){
            this.loadTopRated();
        }else if(view === 'coming_soon'){
            this.loadComingSoon();
        }else if(view === 'search_results'){
            this.updateSearch();
        }
    }

    render(){
        if (this.props.appIsReady) {
            return (
            <Background>
                <SafeAreaView>
                    <View style={Styles.container}>
                        <View style={Styles.innerContainer}>
                            <SearchBar
                                lightTheme
                                round
                                platform={Platform.OS}
                                placeholder="Search Movies..."
                                onChangeText={(search) => this.setState({ search })}
                                value={this.state.search}
                                onEndEditing={this.updateSearch.bind(this)}
                                onClear={() => this.props.clearSearch()}
                            />
                            <CustomPicker loadMore={this.loadMore.bind(this)} />
                            <FlatList
                                keyExtractor={(item) => `${item.id}`}
                                data={this.viewData()}
                                renderItem={this.renderCard}
                                numColumns={3}
                                getItemLayout={this.getItemLayout}
                                onEndReached={() => this.loadMore(this.props.viewState)}
                                onEndReachedThreshold={0.5}
                                ref={(ref) => { this.flatRef = ref; }}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Background>
            );
        } else {
          return <AppLoading />;
        }
    }
}