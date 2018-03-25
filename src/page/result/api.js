import axios from '../../service/axios';

export function getTop(id) {
    return axios.get('/finder_api/api/user/top-score/');
}

export function getBeauti(id) {
    return axios.get('/finder_api/api/user/target-info/', {id: id});
}
