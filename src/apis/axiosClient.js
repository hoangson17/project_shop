import axios from 'axios';

const axiosClient = axios.create({
    baseURL:'https://be-project-reactjs.vercel.app/api/v1', // URL của backend
    timeout:3000, //set timeout for requests
    headers:{
        'Content-Type':'application/json',
    }
});

export default axiosClient;