import axios from "axios";

const api = axios.create({
   baseUrl: 'http://192.168.1.130/'
});

export default api;