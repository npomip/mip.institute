import routes from '@/config/routes';
import axios from 'axios';

const checkLead = async (req, res) => {

  const {id, name, phone, email, question, utms, leadPage, referer, ymUid, access, utm, blockForAmo, promocode,edPartners} = req.body
  // console.log('inCHECKcreateLead', req.body)

  const data = {id, name, phone, email, question, price: null, leadId: '', promocode , responsible_user_id: '', text: '', access, utm, ymUid, leadPage, blockForAmo, edPartners}

    const checkPhoneNumber = `https://crmamomipinstitute.amocrm.ru/api/v4/contacts?query=${phone}&with=leads`

  try {
    
    // Опции для GET-запроса, включая заголовок с access_token
    const options = {
      headers: {
        'Authorization': `Bearer ${access}`,
      },
    };

    // Выполните GET-запрос к amoCRM API
    const checkPhoneResponse = await axios.get(checkPhoneNumber, options);

    if (checkPhoneResponse.status === 200) {
      console.log('status 200')

      const leadData = checkPhoneResponse.data;

      const leadId = checkPhoneResponse.data._embedded.contacts[0]._embedded.leads[0].id
      const responsible_user_id = leadData._embedded.contacts[0].responsible_user_id

      data.leadId = leadId
      data.responsible_user_id = responsible_user_id

      //Добавить заметку
      await axios.post(`${routes.front.root}/api/addNote`, data)

      // Добавить задачу
      await axios.post(`${routes.front.root}/api/taskAdd`, data)

      res.status(200).json({ status: 200, msg: 'Note added in check' })
      
    } else if (checkPhoneResponse.status === 204) {
      console.log(checkPhoneResponse.status)
      const resp = await axios.post(`${routes.front.root}/api/createLead`, data)
      console.log('resp after create lead')
      res.status(200).json({ status: 200, msg: 'Lead created' })
    } 
  } catch (error) {
    console.error('Ошибка при выполнении check or create lead:', error.response.data);
    res.status(400).json(error.response.data);
  }
};

export default checkLead
