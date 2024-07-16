import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const payment = async () => {
  try {
    // values.id = uuidv4()
    // console.log(values)
    const res = await axios.post(`${routes.front.root}/api/payment`, )


    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    console.log(res)
    return output
  } catch (err) {
    console.log(err)
  }
}

export default payment