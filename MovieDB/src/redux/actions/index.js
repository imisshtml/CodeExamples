import * as Types from './types';

export const storeNowPlaying = data => {
    return {
        type: Types.NOWPLAYING,
        payload: data
    }
}

export const storeTopRated = data => {
    return {
        type: Types.TOPRATED,
        payload: data
    }
}

export const storePopular = data => {
    return {
        type: Types.POPULAR,
        payload: data
    }
}

export const storeComingSoon = (data, pages) => {
    return {
        type: Types.COMINGSOON,
        payload: {data, pages}
    }
}

export const storeSearch = data => {
    return {
        type: Types.SEARCH,
        payload: data
    }
}

export const changeView = view => {
    return {
        type: Types.CHANGEVIEW,
        payload: view
    }
}

export const clearSearch = () => {
    return {
        type: Types.CLEAR
    }
}