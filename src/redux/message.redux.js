import * as constants from './constants'

const defaultState = {
    info: {},
    list: [],
}

export function message(state = defaultState, action) {
    let newState = {
        info: {},
        list: [],
    }

    switch (action.type) {
        case constants.UPDATE_MESSAGE:
            newState.list = state.list.concat(action.data)

            return newState
        case constants.RECEIVE_MESSAGE:
            newState.list = state.list.concat(action.data)

            return newState
        case constants.CHANGE_MESSAGE:
            newState = {...state, info: action.data}

            return newState
        case constants.GET_LIST:
            newState = {...state, list: action.data}

            return newState
        default:
            return newState
    }
}