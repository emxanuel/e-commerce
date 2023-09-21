import axios from "axios";
const server = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export { server };
