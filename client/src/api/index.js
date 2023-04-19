import axios from "axios";

const server_url = "http://localhost:5000/";

const client = axios.create({
    baseURL: server_url,
    headers: {
        "Content-type": "application/json",
    },
});

export default client;
