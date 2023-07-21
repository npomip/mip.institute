import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const hitContactRoute = async values => {
  try {
    values.id = uuidv4()
    const res = await axios.post(`${routes.front.root}/api/contact`, values)
    if(values.utm.utm_source
      === 'edpartners'){
      const edPartnersRes = await axios.post(`${routes.front.root}/api/edPartners`, values)
    }
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

export default hitContactRoute
