import routes from '@/config/routes';
import axios from 'axios';

const checkLead = async (req, res) => {

  const {name, phone, email, utms, leadPage, referer, ymUid, access} = req.body
  console.log('inCHECKcreateLead', req.body)
  // res.status(400).json({ status: 400, msg: 'Lead created' })
  const data = {name, phone, email, price: 1500, leadId: '', promo: 'aaaaa', responsible_user_id: '', text: '', access}
  // const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE2ZTMxZTZhNzg2YTgwZjUyZTAyOWNkMWI4MDg2YTE5YzBmMDcyMTI3M2UxZDcxYjY1YWI0MmM0OTdmZjZhYzg4ZmM0OWYxODE3NTRiMjM2In0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiIxNmUzMWU2YTc4NmE4MGY1MmUwMjljZDFiODA4NmExOWMwZjA3MjEyNzNlMWQ3MWI2NWFiNDJjNDk3ZmY2YWM4OGZjNDlmMTgxNzU0YjIzNiIsImlhdCI6MTY5ODU5MzMyMiwibmJmIjoxNjk4NTkzMzIyLCJleHAiOjE2OTg2Nzk3MjIsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.QP5jroQh_WegYwYLB1p7ELwStNsjrYhssHeLH_RgcwDgWQnuHxQS8hlxanG4rmuHEIPLu2jKXT1cFOFxHrIUgnKUS3a_80oSvftRyrRgN9UjpHu1zOo3w6_RxbaYtxAWau-2e-LW_vnuSq1p9WoG38uHViROQlM0R6p7enTR8uctAW0Y7z52_mC8ReobSKSANWioAivgVKOLaYOtTFK8a-mEuzXw9SArFqq56lOTyeEABBAXBmoVKFerHKtetEDzEHQHvlBASrDVv5Gr2TENBa_oJgiLspiLkf7rNTbQoL0qQlGvB9oF0mDRIOt4b1nlh4353TyfkqoX3sYgB4Q4DQ';

    const checkContactUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/contacts?query=${phone}&with=leads`

  try {
    
    // Опции для GET-запроса, включая заголовок с access_token
    const options = {
      headers: {
        'Authorization': `Bearer ${access}`,
      },
    };

    // Выполните GET-запрос к amoCRM API
    const response = await axios.get(checkContactUrl, options);

    if (response.status === 200) {
      const leadData = response.data;

      const leadId = response.data._embedded.contacts[0]._embedded.leads[0].id
      const responsible_user_id = leadData._embedded.contacts[0].responsible_user_id

      data.leadId = leadId
      data.responsible_user_id = responsible_user_id

      //Добавить заметку
      const addNote = await axios.post(`${routes.front.root}/api/addNote`, data)

      // Добавить задачу
      
      if (addNote.status === 200) {
        console.log('addNote after create lead')
        // res.status(200).json({ status: 200, msg: 'Таск added in check' })
        const addTask = await axios.post(`${routes.front.root}/api/taskAdd`, data)

        if (addTask.status === 200) {
          console.log('addTask after create lead')
          res.status(200).json({ status: 200, msg: 'Note added in check' })
        } else {
          console.log(addTask)
          res.status(addTask.status).json({error: addTask})
        }

      } else {
        console.log(addNote)
        res.status(addNote.status).json({error: addNote})
      }

      
    } else if (response.status === 204) {
      console.log(response.status)
      const resp = await axios.post(`${routes.front.root}/api/createLead`, data)
      if (resp.status === 200) {
        console.log('resp after create lead')
        res.status(200).json({ status: 200, msg: 'Lead created' })
      } else {
        console.log(resp)
        res.status(resp.status).json({error: resp})
      }
      
    } else {
      console.log(response)
      res.status(response.status).json({ error: response });
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error.data);
    res.status(500).json({ error: error });
  }
};

export default checkLead
