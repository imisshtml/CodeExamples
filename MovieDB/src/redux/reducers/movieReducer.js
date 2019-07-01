import * as Types from '../actions/types';

const initialState = {
    appIsReady: false,
    nowPlayingPage: 0,
    popularPage: 0,
    topRatedPage: 0,
    searchPage: 0,
    comingSoonPage: 0,
    nowPlayingMaxPage: 0,
    popularMaxPage: 0,
    topRatedMaxPage: 0,
    searchMaxPage: 0,
    comingSoonMaxPage: 0,
    nowPlaying: [],
    topRated: [],
    popular: [],
    searchResults: [],
    comingSoon: [],
    viewState: 'now_playing',
    viewBeforeSearch: 'now_playing',
};

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.NOWPLAYING:
                return {
                    ...state,
                    appIsReady: true,
                    nowPlaying: [...state.nowPlaying, ...action.payload['results']],
                    viewState: 'now_playing',
                    viewBeforeSearch: 'now_playing',
                    nowPlayingPage: state.nowPlayingPage+1,
                    nowPlayingMaxPage: action.payload['total_pages']
                }
        case Types.POPULAR:
                return {
                    ...state,
                    popular: [...state.popular, ...action.payload['results']],
                    viewState: 'popular',
                    viewBeforeSearch: 'popular',
                    popularPage: state.popularPage+1,
                    popularMaxPage: action.payload['total_pages']
                }
        case Types.TOPRATED:
                return {
                    ...state,
                    topRated: [...state.topRated, ...action.payload['results']],
                    viewState: 'top_rated',
                    viewBeforeSearch: 'top_rated',
                    topRatedPage: state.topRatedPage+1,
                    topRatedMaxPage: action.payload['total_pages']
                }
        case Types.COMINGSOON:
                return {
                    ...state,
                    comingSoon: [...state.comingSoon, ...action.payload.data],
                    viewState: 'coming_soon',
                    viewBeforeSearch: 'coming_soon',
                    comingSoonPage: state.comingSoonPage+1,
                    comingSoonMaxPage: action.payload.pages,
                }
        case Types.SEARCH:
            return {
                ...state,
                searchResults: [...state.searchResults, ...action.payload['results']],
                viewState: 'search_results',
                searchPage: state.searchPage+1,
                searchMaxPage: action.payload['total_pages']
            }
        case Types.CLEAR:
            return {
                ...state,
                searchResults: [],
                searchPage: 0,
                searchMaxPage: 0,
                viewState: state.viewBeforeSearch,
            }
        case Types.CHANGEVIEW:
            return {
                ...state,
                viewState: action.payload,
            }
        default: 
            return state;
    }
}

export default movieReducer;