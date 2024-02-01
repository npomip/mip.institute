import axios from 'axios'
import { routes } from '@/config/index'

const genezis = async values => {
  try {
    console.log(values)
    const res = await axios.post(`${routes.front.root}/api/genezis`, values)


    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
    

  } catch (err) {
    console.log(err)
  }
}


export default genezis