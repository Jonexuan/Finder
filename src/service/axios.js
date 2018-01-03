import axios from 'axios'
import * as util from './util'

// request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(config.method === 'post') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.data = util.toFormData(config.data)
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

axios.defaults.headers.post

export default axios