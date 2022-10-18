import postReducer from "./postSlice";
import {
    CREATE_POST,
    EDIT_POST,
    DELETE_POST
} from '../../actions/types';

test('Add new post', () => {
    const initialState = []

    const action = { type: CREATE_POST, payload: { id: 0, title: "Hello World!", author: "foo", date: "01-10-2022" }}
    const result = postReducer(initialState, action)

    expect(result[0].title).toBe("Hello World!")
})

test('Edit post', () => {
    const initialState = [
        { id: 0, title: "Hello World!", author: "foo", date: "01-10-2022" },
        { id: 1, title: "Hello World 2!", author: "foo", date: "30-09-2022" }
    ]

    const action = { type: EDIT_POST, id: 0, payload: { title: "Hello Germany!" }}
    const result = postReducer(initialState, action)

    expect(result.find(p => { return p.id === 0 }).title).toBe("Hello Germany!")
})

test('Delete post', () => {
    const initialState = [
        { id: 0, title: "Hello World!", author: "foo", date: "01-10-2022" },
        { id: 1, title: "Hello World 2!", author: "foo", date: "30-09-2022" }
    ]

    const action = { type: DELETE_POST, id: 0 }
    const result = postReducer(initialState, action)

    expect(result.find(p => { return p.id === 0 })).toEqual(undefined)
})