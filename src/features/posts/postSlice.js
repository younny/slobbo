import {
    LOAD_POSTS,
    CREATE_POST,
    EDIT_POST,
    DELETE_POST
} from '../../actions/types';

const initialState = []

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS: {
            return [
                ...action.payload
            ]
        }
        case CREATE_POST: {
            return [
                ...state,
                action.payload
            ]
        }
        case EDIT_POST: {
            return state.map(post => post.id === action.id ? { ...post, ...action.payload } : post)
        }
        case DELETE_POST: {
            return state.filter(post => post.id !== action.id)
        }
        default:
            return state
    }
}

