import axios from "axios"

const BASE_URL = "http://localhost:4040";

const apiClient = axios.create({
    baseURL: BASE_URL
});

export default apiClient;