import axios from '../../service/axios';
import * as user from '../../service/user-state'

const userInfo = user.getUser()

export function getList() {
    return axios.get('/finder_api/api/user/target-list/');
}

export function getBeauti(id) {
    return axios.get('/finder_api/api/user/target-info/', {id: id});
}

export function saveScore(data){
    return axios.post(`/finder_api/api/user/do-score/${userInfo.sessionId}` , data)
}
