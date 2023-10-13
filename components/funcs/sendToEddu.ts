import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const sendToEddu = async () => {
  try {
    const res = await axios.get(`${routes.front.root}/api/eddu`)
    let output
    res.status === 200 && (output = 200)
    console.log(output, 'oputput')
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
    return err
  }
}

export default sendToEddu