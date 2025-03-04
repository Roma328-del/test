import axios from "axios";
export let instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'Content-Type': 'application/json' }
})
export let instance1 = axios.create({
    baseURL: 'http://localhost:8000',
    // withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
})