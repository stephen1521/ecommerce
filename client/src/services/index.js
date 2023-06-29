import { products } from '../data/data'


const service = {
    getData: ({from, to}) => {
        return new Promise((res, rej) => {
            const data = products.slice(from, to);
            res({
                count: products.length,
                data: data
            })
        })
    }
}

export default service