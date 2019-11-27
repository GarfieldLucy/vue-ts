import axios from '@/utils/api'

export const getDagList = (developerId: Number) => {
    return axios.get('/idata/find/dags', {
        params: {
            developerId
        }
    })
}
