import axios from "axios";


export const axiosIntrance = axios.create({
    baseURL: process.env.REACT_APP_URL
})


class HttpClient {
    post(parameters) {
        const {url, payload} = parameters

        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return axiosIntrance(url, payload, options)
            .then(res => console.log(res))
    };
};


export default HttpClient
