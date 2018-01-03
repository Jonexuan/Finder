import axios from '../../service/axios'


export function login(data){
    return axios.post('/user/login', { ...data })
}