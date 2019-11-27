import axios from '@/utils/api'
import { verify } from './types'

export const userVerify = ({ token, userName }: verify) => {
    return axios.post('/rest/admin/user/verify', {
        token,
        userName
    })
}
