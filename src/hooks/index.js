import { ref } from 'vue'
import httpObj from '../api/api'


export function processData(data, field) {
    let result = []
    data.forEach(item => {
        let obj = {}
        for (let i in item) {
            const label = field.find(item2 => item2.id === Number(i)).label
            obj[label] = item[i].value
        }
        result.push(obj)
    })
    return result;
}
export async function useRequest(url, from, select){
    const res = await httpObj.sendPost(url, {
        from: from,
        select: select
    })
    if(res.status === 200){
        return ref(processData(res.data.data, res.data.fields))
    } else {
        return ref([])
    }
}

