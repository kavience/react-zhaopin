import * as constants from './constants'
import axios from 'axios'
import {message} from "antd";

export const changeInfo = (data) => ({
    type: constants.CHANGE_MESSAGE,
    data
})

export const updateList = (data) => ({
    type: constants.UPDATE_MESSAGE,
    data
})
export const sendMessage = (data) => {
    return (dispatch) => {
        axios.post('/chat/creator', data).then(res => {
            if (res.data.code !== 0) {
                message.error(res.data.data.msg, 2);
            } else {
                dispatch(updateList(data))
            }
        }
       )
    }
}

export const receiveMessage = (data) => ({
    type: constants.RECEIVE_MESSAGE,
    data
})

export const getList = (data) => {
    return (dispatch) => {
        axios.post('/chat/list', data).then(res => {
            dispatch({
                type: constants.GET_LIST,
                data: res.data.data.data
            })
        })
    }
}