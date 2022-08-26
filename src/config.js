import axios from 'axios'

const api = {
    url: 'https://rickandmortyapi.com/api/',
    async get(url){
        return axios.get(this.url + url)
        .then(response => response)
    }
}
export default api