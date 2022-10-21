import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  LOAD_POSTS,
  UPDATE_FILTER,
  SELECT_POST,
} from "./types"

const requestHeaders = {
  "Content-Type": "application/json",
}

export const updateFilter = (filter) => {
  return function (dispatch, getState) {
    dispatch({
      type: UPDATE_FILTER,
      payload: filter,
    })
  }
}

export const selectPost = (post) => {
  return function (dispatch, getState) {
    dispatch({
      type: SELECT_POST,
      payload: post,
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
          payload: posts,
        })
      })
      .catch((err) => console.error(err))
  }
}

export const createPost = (post) => {
  return function (dispatch, getState) {
    dispatch({
      type: CREATE_POST,
      payload: post,
    })
  }
}

export const editPost = (id, post) => {
  return function (dispatch, getState) {
    console.log(post)
    fetch(`http://localhost:8080/posts/${id}`, {
      method: "PATCH",
      headers: requestHeaders,
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((post) => {
        dispatch({
          type: EDIT_POST,
          payload: post,
        })
      })
      .catch((err) => console.error(err))
  }
}

export const deletePost = (id) => {
  return function (dispatch, getState) {
    dispatch({
      type: DELETE_POST,
      payload: id,
    })
  }
}
