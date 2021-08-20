import axios from 'axios';
import api from './Api.js';

export {api};

// const bastUrl = 'https://dd586a6e-52d8-45aa-869a-096c31972be5.bspapp.com/http';
// const bastUrl = 'http://laraweb.test/api';
const bastUrl = 'https://capturex.fun/api';
let ajax = axios.create({
    baseURL: bastUrl, 
    timeout: 100000, // 请求超时时间
  });


// request拦截器
ajax.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      console.error('error:', error); // for debug
      Promise.reject(error);
    },
  );
  
  // respone拦截器
  ajax.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      console.error('error:' + error); // for debug
      return Promise.reject(error);
    },
  );

  
  export default ajax;