import axios from '../../service/axios'

export function getUserInfo() {
    return axios.get('/finder_api/api/user/info/')
}