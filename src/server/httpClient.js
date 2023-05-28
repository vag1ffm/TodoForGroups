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
};

const httpClient = new HttpClient();

export default httpClient
