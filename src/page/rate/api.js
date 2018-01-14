import axios from '../../service/axios';

export function getList() {
    return axios.get('/finder_api/api/user/target-list/');
}

export function getBeauti(id) {
    return axios.get('/finder_api/api/user/target-info/', {id: id});
}