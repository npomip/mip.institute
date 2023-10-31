import axios from 'axios';

const tokens = async (req, res) => {
  const {leadId, name, phone,email, access}=req.body 
  console.log('notes req body =====>', req.body)
  // console.log(req.body)
  try {
    // const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE2ZTMxZTZhNzg2YTgwZjUyZTAyOWNkMWI4MDg2YTE5YzBmMDcyMTI3M2UxZDcxYjY1YWI0MmM0OTdmZjZhYzg4ZmM0OWYxODE3NTRiMjM2In0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiIxNmUzMWU2YTc4NmE4MGY1MmUwMjljZDFiODA4NmExOWMwZjA3MjEyNzNlMWQ3MWI2NWFiNDJjNDk3ZmY2YWM4OGZjNDlmMTgxNzU0YjIzNiIsImlhdCI6MTY5ODU5MzMyMiwibmJmIjoxNjk4NTkzMzIyLCJleHAiOjE2OTg2Nzk3MjIsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.QP5jroQh_WegYwYLB1p7ELwStNsjrYhssHeLH_RgcwDgWQnuHxQS8hlxanG4rmuHEIPLu2jKXT1cFOFxHrIUgnKUS3a_80oSvftRyrRgN9UjpHu1zOo3w6_RxbaYtxAWau-2e-LW_vnuSq1p9WoG38uHViROQlM0R6p7enTR8uctAW0Y7z52_mC8ReobSKSANWioAivgVKOLaYOtTFK8a-mEuzXw9SArFqq56lOTyeEABBAXBmoVKFerHKtetEDzEHQHvlBASrDVv5Gr2TENBa_oJgiLspiLkf7rNTbQoL0qQlGvB9oF0mDRIOt4b1nlh4353TyfkqoX3sYgB4Q4DQ';

    const checkContactUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/${leadId}/notes`
    // Опции для GET-запроса, включая заголовок с access_token
    const options = {
      headers: {
        'Authorization': `Bearer ${access}`,
      },
    };
    const addNote= [
      {
        note_type: 'common',
        params: {
          "text": `новый данные:
          телефон: ${phone}
          имя: ${name}
          email: ${email}`
        }
      }
    ]

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(checkContactUrl, addNote, {
      headers: {
        Authorization: `Bearer ${access}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const leadData = response.data;
      console.log(leadData)
      res.status(200).json({ status: 200, msg: 'Note added in addNode' })
    } else {
      console.log(response)
      res.status(response.status).json({ error: response });
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
};

export default tokens