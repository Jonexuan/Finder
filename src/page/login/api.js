import axios from '../../service/axios'


export function login(data){
    return axios.post('/user/login', { ...data })
}

export function regist(data){
    return axios.post('/user/regist', { ...data })
}