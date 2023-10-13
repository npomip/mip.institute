import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const ipCheckFunc = async () => {
  try {
    // values.id = uuidv4()
    // values.token = value
    console.log('ipp')
    const res = await axios.post(`${routes.front.root}/api/ipCheck`)
    let output
    res.status === 200 && (output = 200)
    
    res.status === 403 && (output = 403)
    res.status === 500 && (output = 500)
    console.log(output, 'oputput')
    return output
    // return { res, edPartnersRes };
  } catch (err) {
    console.log(err)
    return err
  }
}

export default ipCheckFunc