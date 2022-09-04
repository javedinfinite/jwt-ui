import axios from 'axios';

const myAxios = axios.create({
    timeout: 5000, // ms 
});


const requestHandler = request => {
    const localHackerUser = localStorage.getItem("hacker_user");
    if (localHackerUser) {
        request.headers.authorization = `Bearer ${JSON.parse(localHackerUser).token}`
    }
    return request;
};

const responseHandler = response => {
    return response;
};

const errorHandler = error => {
    if (error.response.status === 401) {
        localStorage.removeItem('hacker_user');
        window.location.reload()
    }
    return Promise.reject(error);
};

myAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

myAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );

export {myAxios}
