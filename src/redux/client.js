import axios from "axios";

const client = axios.create({
    baseURL: "http://13.250.101.238/v1"
    // withCredentials:false
})

client.interceptors.request.use(
    (config) => {
        const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJ1c2VyIiwidXNlcklkIjoiNWY1Yjk0YTY2YTNjYTMwMDA0YzJjZWJiIn0sImlhdCI6MTU5OTgzOTMwMiwiZXhwIjoxNjAwMDk4NTAyfQ.Fdft4zwZwOzww6Fdbk2t4UiTz1cpNSrIYrzsvddXh1U"
        if (authToken) {
            config.headers.common['Authorization'] = `Bearer ${authToken}`
        }
        return config;
    },
    (err) => {
        console.log("client error");
        return Promise.reject(err);
    }
)

export default client