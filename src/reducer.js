import { combineReducers } from "redux"

import postsReducer from "./features/posts/postSlice"
import filtersReducer from "./features/filters/filtersReducer"

const rootReducer = combineReducers({
    posts: postsReducer,
    filters: filtersReducer
})

export default rootReducer