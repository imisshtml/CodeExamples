import { connect } from 'react-redux';
import DetailsScreen from './DetailsScreen';

const mapStateToProps = state => ({
    nowPlaying: state.movieReducer.nowPlaying,
    popular: state.movieReducer.popular,
    topRated: state.movieReducer.topRated,
    searchResults: state.movieReducer.searchResults,
    comingSoon: state.movieReducer.comingSoon,
    viewState: state.movieReducer.viewState,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);