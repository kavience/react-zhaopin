import * as constants from './constants';

const defaultState = {
    isAuth: false,
    email: '',
    nickname: '',
    id: '',
    avatar: '/static/img/logo.svg',
    userList: []
};
// reducer 
export function user(state = defaultState, action) {
    let newState = state
    switch (action.type) {
        case constants.GET_USER_INFO:
            newState = {
                ...state,
                isAuth: true,
                email: action.data.email,
                nickname: action.data.nickname,
                id: action.data._id,
            }

            return newState
        case constants.GET_USER_LIST:
            newState = {...state, userList: action.data}

            return newState
    }
    return newState;
}

