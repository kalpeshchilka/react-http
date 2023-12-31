import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common['Authorization'] = 'AUTH  TOKEN from instance'

//global handle the error for requests using axios instance
instance.interceptors.request.use(req => {
    console.log(req);
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

export default instance
