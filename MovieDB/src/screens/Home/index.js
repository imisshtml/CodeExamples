import { connect } from 'react-redux';
import { storeNowPlaying, storeSearch, clearSearch, changeView, storePopular, storeTopRated, storeComingSoon } from '../../redux/actions';
import HomeScreen from './HomeScreen';

const mapStateToProps = state => ({
    appIsReady: state.movieReducer.appIsReady,
    nowPlaying: state.movieReducer.nowPlaying,
    popular: state.movieReducer.popular,
    topRated: state.movieReducer.topRated,
    searchResults: state.movieReducer.searchResults,
    comingSoon: state.movieReducer.comingSoon,

    viewState: state.movieReducer.viewState,
    nowPlayingPage: state.movieReducer.nowPlayingPage,
    popularPage: state.movieReducer.popularPage,
    topRatedPage: state.movieReducer.topRatedPage,
    searchPage: state.movieReducer.searchPage,
    comingSoonPage: state.movieReducer.comingSoonPage,

    nowPlayingMaxPage: state.movieReducer.nowPlayingMaxPage,
    popularMaxPage: state.movieReducer.popularMaxPage,
    topRatedMaxPage: state.movieReducer.topRatedMaxPage,
    searchMaxPage: state.movieReducer.searchMaxPage,
    comingSoonMaxPage: state.movieReducer.comingSoonMaxPage,
});

const mapDispatchToProps = (dispatch) => ({
    storeNowPlaying: data => dispatch(storeNowPlaying(data)),
    storePopular: data => dispatch(storePopular(data)),
    storeTopRated: data => dispatch(storeTopRated(data)),
    storeComingSoon: (data, pages) => dispatch(storeComingSoon(data, pages)),
    storeSearch: data => dispatch(storeSearch(data)),
    clearSearch: () => dispatch(clearSearch()),
    changeView: view => dispatch(changeView(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);