import { UPDATE_FILTER } from "../../actions/types"

const initialState = {
    postFilter: 'Daily'
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FILTER: {
            return {
                ...state,
                postFilter: action.payload
            }
        }
        default:
            return state
    }
}

