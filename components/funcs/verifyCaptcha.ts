import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const verifyCaptcha = async token => {
  try {
    // values.id = uuidv4()
    // values.token = values
    const res = await axios.post(`${routes.front.root}/api/verify`, token)
    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
    // return { res, edPartnersRes };
  } catch (err) {
    console.log(err)
    return err
  }
}

export default verifyCaptcha