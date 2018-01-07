import axios from '../../service/axios'


export function login(data){
    return axios.post('/finder_api/api/user/login', { ...data })
}