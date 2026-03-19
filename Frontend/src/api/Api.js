import axios from "axios"

const API = axios.create({
    baseURL: "https://hackathon-platform-git-main-akshansh-kakkkars-projects.vercel.app/api"
})

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common["Authorization"];
    }
}

export const registerUser = (userData) => API.post("/auth/register", userData)
export const loginUser = (userData) => API.post("/auth/login", userData)