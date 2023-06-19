import axios from 'axios'

const sendToCalltouch = async data => {
  const ct_site_id = '59867';
  const ct_data = {
    fio: data.name,
    phoneNumber: data.phone,
    email: data.email,
    subject: 'Заявка с сайта',
    // tags: ' ',
    // comment: ' ',
    // requestUrl: window.location.href,
    // sessionId: ' '
    // sessionId: window.ct('calltracking_params', '20yl3dqe')?.sessionId,
  };
  try {
    console.log(ct_data)
    const response = await axios.post(
      `https://api.calltouch.ru/calls-service/RestAPI/requests/59867/register/  `,
      ct_data
    );
    
      console.log('ERE', response)
    if (response.status === 200) {
      console.log('Success');
      return response
    } else {
      console.log('Error');
    }
  } catch (err) {
    console.log(err)
    return err
  }
}

export default sendToCalltouch