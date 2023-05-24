import axios from "axios";




const instance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`
})
instance.defaults.headers.common.Authorization =
 `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNTc0MDlkMTItZGRhZC00OTM4LWEzN2EtYzE3YmMzM2FhNGJhIiwiZW1haWwiOiJnYXRldGVAZ21haWwuY29tIiwicm9sZSI6InNlbGxlciIsInN0YXR1cyI6dHJ1ZX0sImlhdCI6MTY4NDA3MjUyMywiZXhwIjoxNjg0Njc3MzIzfQ.el5AG0iBJpLi4nZ-yHK8_mTCEefg8WCmgGyqeiQXoyo`

export default instance;