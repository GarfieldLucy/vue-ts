import Axios, { AxiosInstance } from 'axios'
import qs from 'qs'

const api: AxiosInstance = Axios.create({
    // transformRequest: [
    //     (data: any) => {
    //         return qs.stringify(data)
    //     }
    // ],
    timeout: 10000
})

// 添加请求拦截器
api.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return error
    }
)

api.defaults.withCredentials = true

export default api
