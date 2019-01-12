import * as constants from './constants';
import axios from 'axios';
export const getUserInfo = (data) => ({
    type: constants.GET_USER_INFO,
    data
})
export const updateUserList = (data) => ({
    type: constants.GET_USER_LIST,
    data
})
export const getUserList = () => {
    return (dispatch) => {
        axios.get('/user/list').then((res) => {
            if (res.data.code === 0) {
                const userList = res.data.data.data
                dispatch(updateUserList(userList))
            }
        })
    }
}
