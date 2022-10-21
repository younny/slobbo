import {
  LOAD_POSTS,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  SELECT_POST,
} from "../../actions/types"

const initialState = {
  selectedPost: undefined,
  posts: [],
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_POST: {
      return {
        ...state,
        selectedPost: action.payload,
      }
    }
    case LOAD_POSTS: {
      return {
        ...state,
        posts: [...action.payload],
      }
    }
    case CREATE_POST: {
      return {
        ...state,
        posts: [...state, action.payload],
      }
    }
    case EDIT_POST: {
      return {
        ...state,
        selectedPost: undefined,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? { ...post, ...action.payload } : post
        ),
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      }
    }
    default:
      return state
  }
}
