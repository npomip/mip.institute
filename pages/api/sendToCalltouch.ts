import axios from 'axios';

export default async function handler(req, res) {

  const { _ym_d } = req.cookies
  console.log('REQ', req.body)
  const { fio, phoneNumber, email, requestUrl } = req.body;
  const ct_site_id = '59867';
  // const ct_data = {
  //   fio,
  //   phoneNumber,
  //   email,
  //   subject: 'Заявка с сайта',
  //   requestUrl
  // };
  
  const ct_data = new URLSearchParams();
  ct_data.append('fio', fio);
  ct_data.append('phoneNumber', phoneNumber);
  ct_data.append('email', email);
  ct_data.append('subject', 'Заявка с сайта');
  ct_data.append('requestUrl', requestUrl);
  ct_data.append('sessionId', _ym_d || ' ');


  try {
    console.log('IN TRY', ct_data);
    const response = await axios.post(
      `https://api.calltouch.ru/calls-service/RestAPI/requests/${ct_site_id}/register/`,
      ct_data,
    );

    if (response.status === 200) {
      console.log('Success');
      res.status(200).json({ success: true });
    } else {
      console.log('Error');
      res.status(500).json({ success: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
}