const loggerMiddleware = store => next => action => {
    console.log('dispatching', action.name)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default loggerMiddleware