import axios from 'axios'

const transformRequest = (jsonData = {}) => Object.entries(jsonData)
    .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join('&');

const api = {
    url: 'https://rickandmortyapi.com/api/',
    token: null,
    utm: localStorage.getItem('utm'),

    async get(url, data) {

        return axios.get(this.url + url + `?${transformRequest(data)}`)
            .then((response) => {
                return response;
            })
            // .catch((error) => {
            //     //
            // })
            .finally(() => {
                // always executed
            });
    },
};


export default api