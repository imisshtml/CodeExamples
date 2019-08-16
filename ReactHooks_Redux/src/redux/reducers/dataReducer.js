import * as Types from 'src/redux/actions/types';

const initialState = {
    users: [],
    uiFaces: [],
    posts: [],
    comments: [],
    isLoading: false,
    isLoadingComments: false,
    postCommentToggle: {},
};

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.CREATEPOST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
        case Types.DELETEPOST:
            let newPosts = state.posts.filter(item => {
                return item.id !== action.payload;
            })
            return {
                ...state,
                posts: newPosts,
            }
        case Types.TOGGLEPOST:
            let checkIdPostExists = (action.payload in state.postCommentToggle);
            let postCommentToggle = Object.assign({}, state.postCommentToggle);
    
            postCommentToggle[action.payload] = checkIdPostExists ? !postCommentToggle[action.payload] : true;
            return {
                ...state,
                postCommentToggle,
            }
        case Types.INIT:
            return {
                ...state,
                isLoading: true,
                isLoadingComments: true,
            }
        case Types.LOADUSERS:
            return {
                ...state,
                users: action.payload,
            }
        case Types.LOADFACES:
            return {
                ...state,
                uiFaces: action.payload,
                isLoading: false
            }
        case Types.LOADPOSTS:
            return {
                ...state,
                posts: action.payload,
            }
        case Types.LOADCOMMENTS:
            return {
                ...state,
                comments: action.payload,
                isLoadingComments: false
            }
        default: 
            return state;
    }
}

export default dataReducer;