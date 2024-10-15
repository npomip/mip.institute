import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const payment = async (values) => {
  try {
    values.id = uuidv4()
    const res = await axios.post(`${routes.front.root}/api/payment`,values )

    let output
    res.status === 200 && (output = res.data)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
  }
}

export default payment
