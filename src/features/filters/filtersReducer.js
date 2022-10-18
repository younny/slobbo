const initialState = {
    status: 'All'
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/filterChanged': {
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state
    }
}

