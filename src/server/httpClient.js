import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL
})


class HttpClient {
    post(parameters) {
        const {url, payload} = parameters;

        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        return axiosInstance
            .post(url, payload, options)
            .then(res => res)
    };

    generalPost(parameters) {
        const {url, payload} = parameters;
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('authToken')}`
            }
        };

        return axiosInstance
            .post(url, payload, options)
            .then(res => res)
    };

    generalGet(parameters) {
        const {url, payload = null} = parameters;

        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('authToken')}`
            }
        };

        return axiosInstance
            .get(url, options)
    };
    generalPut(parameters) {
        const {url, payload} = parameters;

        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('authToken')}`
            }
        };


        return axiosInstance
            .put(url, payload, options)
    };
    generalDelete(parameters) {
        const {url, payload = null} = parameters;

        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('authToken')}`
            }
        };


        return axiosInstance
            .delete(url, options)
    };
    LogoutPost(parameters) {
        const {url} = parameters;

        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('authToken')}`
            }
        };

        return axiosInstance
            .post(url, {},   options)
            .then(res => res)
    };
};

const httpClient = new HttpClient();

export default httpClient
