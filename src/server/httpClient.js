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

    generelPost(parameters) {
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

    generelGet(parameters) {
        const {url, payload = null} = parameters;

        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('authToken')}`
            }
        };
        console.log(url, payload, options)

        return axiosInstance
            .get(url, options)
    };
};

const httpClient = new HttpClient();

export default httpClient
