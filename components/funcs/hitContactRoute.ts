import axios from 'axios'
import { routes } from '@/config/index'

const hitContactRoute = async values => {
  try {
    const res = await axios.post(`${routes.front.root}/api/contact`, values)
    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
    return err
  }
}

export default hitContactRoute
