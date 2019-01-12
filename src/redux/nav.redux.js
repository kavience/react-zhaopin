import * as constants from './constants'

const defaultState = {
    newsImg: '/static/img/xiaoxi.png',
    centerImg: '/static/img/yonghu-active.png',
    active: 'centerImg'
}

export function nav(state = defaultState, action) {
    let newState = state
    switch (action.type) {
        case constants.CHANGE_NAV_ACTIVE:
            if (action.data == 'centerImg') {
                newState = {
                    newsImg: '/static/img/xiaoxi.png',
                    centerImg: '/static/img/yonghu-active.png',
                    active: 'centerImg'
                }
            } else if (action.data == 'newsImg') {
                newState = {
                    newsImg: '/static/img/xiaoxi-active.png',
                    centerImg: '/static/img/yonghu.png',
                    active: 'newsImg'
                }
            }

    }

    return newState
}