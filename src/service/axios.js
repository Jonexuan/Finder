import axios from 'axios'
import * as util from './util'
import { Toast } from 'antd-mobile'

// request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data.code === 200) {
      return response.data;
    } else if (response.data.code  === 201) {
      window.location.reload()
    } else {
      Toast.fail(response.data.msg || '操作失败')
      return Promise.reject(response.data);
    }
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

axios.defaults.headers.post

export default axios