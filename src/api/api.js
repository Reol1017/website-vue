import nprogress from "nprogress";
import axios from 'axios'
class Http{
    constructor(baseUrl, timeoout){
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: timeoout,
            headers: {
                'QB-Realm-Hostname': 'anchorhomes.quickbase.com',
                'Authorization': 'QB-USER-TOKEN b8deue_qi2q_0_qf4xb7c43rv98cjbs2yacj5nie5',
                'Content-Type': 'application/json'
            }
        })
        this.client.interceptors.request.use(config => {
            nprogress.start();
            return config;
        }, err => {
            return Promise.reject(err)
        })

        this.client.interceptors.response.use(res => {
            nprogress.done()
            return res
        }, err => {
            return Promise.reject(err)
        })
    }
    async sendGet(url, params = {}){
        const res = await this.client.get(url, {
            params: params
        })
        return res
    }

    async sendPost(url, data){
        const res = await this.client.post(url, data)
        return res
    }
}

const httpObj = new Http('https://api.quickbase.com/v1', 5000)

export default httpObj;