import axios from 'axios'
import { routes } from '@/config/index'

const sendToCalltouch = async data => {

  // const sessionId = localStorage.getItem('_ym_d');
  const ct_data = {
    fio: data.name,
    phoneNumber: data.phone,
    email: data.email,
    subject: 'Заявка с сайта',
    tags: ' ',
    comment: ' ',
    requestUrl: window.location.href,
    // sessionId: ' '
    // sessionId,
  };

  try {
        console.log(ct_data)
        const response = await axios.post(
          `${routes.front.root}/api/sendToCalltouch`,
          ct_data
        );
        
        let output
        response.status === 200 && (output = 200)
        response.status === 500 && (output = 500)
      return output
    } catch (err) {
      console.log(err)
      return err
      }
};
export default sendToCalltouch
