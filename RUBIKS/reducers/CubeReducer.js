import * as Types from '../actions/types';

const initialState = {
    loc: 0,
    moves: 0,
    coins: 0,
    player: 'Cwild',
    opponent: 'JohnDoe',
    my_comp: 0,
    op_comp: 0,
    game_over: false,
    target_1: '',
    target_2: '',
    target_3: '',
    target_4: '',
    target_5: '',
    target_6: '',
    target_7: '',
    target_8: '',
    target_9: '',
    curr_1: '',
    curr_2: '',
    curr_3: '',
    curr_4: '',
    curr_5: '',
    curr_6: '',
    curr_7: '',
    curr_8: '',
    curr_9: '',
};

const CubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_CUBE_ID:
            return {
                ...state,
                loc: action.payload,
                moves: state.moves+1
              };
        case Types.UPDATE_COMPLETED:
            return {
                ...state,
                my_comp: action.payload
            };
        case Types.UPDATE_MOVES:
            return {
                ...state,
                moves: state.moves+1
            };
        case Types.UPDATE_TARGET_1:
            return {
                ...state,
                target_1: action.payload,
            };
        case Types.UPDATE_TARGET_2:
            return {
                ...state,
                target_2: action.payload,
            };
        case Types.UPDATE_TARGET_3:
            return {
                ...state,
                target_3: action.payload,
            };
        case Types.UPDATE_TARGET_4:
            return {
                ...state,
                target_4: action.payload,
            };
        case Types.UPDATE_TARGET_5:
            return {
                ...state,
                target_5: action.payload,
            };
        case Types.UPDATE_TARGET_6:
            return {
                ...state,
                target_6: action.payload,
            };
        case Types.UPDATE_TARGET_7:
            return {
                ...state,
                target_7: action.payload,
            };
        case Types.UPDATE_TARGET_8:
            return {
                ...state,
                target_8: action.payload,
            };
        case Types.UPDATE_TARGET_9:
            return {
                ...state,
                target_9: action.payload,
            };

        case Types.UPDATE_CURRENT_1:
            return {
                ...state,
                curr_1: action.payload,
            };
        case Types.UPDATE_CURRENT_2:
            return {
                ...state,
                curr_2: action.payload,
            };
        case Types.UPDATE_CURRENT_3:
            return {
                ...state,
                curr_3: action.payload,
            };
        case Types.UPDATE_CURRENT_4:
            return {
                ...state,
                curr_4: action.payload,
            };
        case Types.UPDATE_CURRENT_5:
            return {
                ...state,
                curr_5: action.payload,
            };
        case Types.UPDATE_CURRENT_6:
            return {
                ...state,
                curr_6: action.payload,
            };
        case Types.UPDATE_CURRENT_7:
            return {
                ...state,
                curr_7: action.payload,
            };
        case Types.UPDATE_CURRENT_8:
            return {
                ...state,
                curr_8: action.payload,
            };
        case Types.UPDATE_CURRENT_9:
            return {
                ...state,
                curr_9: action.payload,
            };
        default:
            return state;
    }
}

export default CubeReducer;