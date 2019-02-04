import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-cinema-app.firebaseio.com/'
})

export default instance;