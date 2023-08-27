import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// global axios default request/response configuration
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH-TOKEN';
axios.defaults.headers.post['Accept'] = 'application/text';



//global handle the error for requests
axios.interceptors.request.use(req => {
    console.log(req);
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

//global handle the error for responses
axios.interceptors.response.use(res => {
    return res;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
