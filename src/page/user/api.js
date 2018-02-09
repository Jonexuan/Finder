import axios from '../../service/axios'

export function getUserInfo() {
    return axios.get('/finder_api/api/user/info/')
}
export function saveUserInfo() {
    return axios.get('/finder_api/api/user/info/')
}
export function saveUserimage(data) {
    return axios.post('/finder_api/api/user/image-upload/', {
        data
    })
}
