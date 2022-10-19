import {
    CREATE_POST,
    EDIT_POST,
    DELETE_POST,
    LOAD_POSTS,
    UPDATE_FILTER
} from "./types";

export const updateFilter = (filter) => {
    return function (dispatch, getState) {
        dispatch({
            type: UPDATE_FILTER,
            payload: filter
        })
    }
}

export const loadPosts = () => {
    return function (dispatch, getState) {
        fetch("http://localhost:8080/posts")
            .then((response) => response.json())
            .then((posts) => {
                dispatch({
                    type: LOAD_POSTS,
                    payload: posts
                })
            })
            .catch((err) => console.error(err))
    }
}

export const createPost = (post) => {
    return function (dispatch, getState) {
        dispatch({
            type: CREATE_POST,
            payload: post
        })
    }
}

export const editPost = (post) => {
    return function (dispatch, getState) {
        dispatch({
            type: EDIT_POST,
            payload: post
        })
    }
}

export const deletePost = (id) => {
    return function (dispatch, getState) {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    }
}