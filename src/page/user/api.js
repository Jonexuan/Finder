import axios from '../../service/axios'
import * as user from '../../service/user-state'

const userInfo = user.getUser()

export function getUserInfo() {
    return axios.get('/finder_api/api/user/info/')
}
export function saveUserInfo(data) {
    return axios.post(`/finder_api/api/user/user-update/${userInfo.sessionId}`, data)
}
export function saveUserimage(data) {
    return axios.post(`/finder_api/api/user/image-upload/${userInfo.sessionId}`, data)
}
