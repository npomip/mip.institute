import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const verifyCaptcha = async token => {
  try {
    // values.id = uuidv4()
    // values.token = values
    console.log('in func', token)
    const res = await axios.post(`${routes.front.root}/api/verify`, token)
    console.log('in func', token)
    let output
    res.status === 200 && (output = 200)
    console.log(output, 'oputput')
    res.status === 500 && (output = 500)
    return output
    // return { res, edPartnersRes };
  } catch (err) {
    console.log(err)
    return err
  }
}

export default verifyCaptcha