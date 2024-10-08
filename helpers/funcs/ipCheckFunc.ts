import { routes } from '@/config/index'
import axios from 'axios'

const ipCheckFunc = async () => {
  try {
    const res = await axios.post(`${routes.front.root}/api/ipCheck`)
    let output
    res.status === 200 && (output = 200)
    
    res.status === 403 && (output = 403)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    return err
  }
}

export default ipCheckFunc