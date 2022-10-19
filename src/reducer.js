import { combineReducers } from "redux"

import postsReducer from "./features/posts/postSlice"
import filtersReducer from "./features/filters/filtersSlice"

const rootReducer = combineReducers({
    posts: postsReducer,
    filters: filtersReducer
})

export default rootReducer