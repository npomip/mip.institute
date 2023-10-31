import axios from 'axios';
import moment from 'moment';

const tokens = async (req, res) => {
  console.log(moment().unix())
  
  // try {
  //   const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZkMDcyZmEwNzk0NWJhNGU0NDMwYjU5NGM2ZWE2OWNmNDg2MjlkMjMzNDRmM2I0YTc0N2Q5Yzc3ZWFjYTQyYTJiZmQ1ZDlmODcwNWFhYjBkIn0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiI2ZDA3MmZhMDc5NDViYTRlNDQzMGI1OTRjNmVhNjljZjQ4NjI5ZDIzMzQ0ZjNiNGE3NDdkOWM3N2VhY2E0MmEyYmZkNWQ5Zjg3MDVhYWIwZCIsImlhdCI6MTY5ODQwNDA4NCwibmJmIjoxNjk4NDA0MDg0LCJleHAiOjE2OTg0OTAzNjgsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.NligdBqxnp6wGSBb2Hs2QxrSMPm6jZe-LSH1KUCn7MgRvp8B9v9Wc3BKjqnwJtYc5WJkX3l29B8KEV89quvKizGyQeknwCSF9Q6GDTAq1ehzUzN0UNR1gGqGOtWVDhXCAbbdT8HvU8i9WKphZD4ASN_wev_xLfoFHTg1ZtAdHbOfP6mgWyPUi3OutEaiIkfKKzUBCOjSeSDElX4wNQcch-pNEjQG-m_VkfBHjjbXZ9pH33VIGAy6mLu3vobzO9l8b7tuz8Mmg4Bi5ug_7yUdbZPo93vOAe_x-DWOKIDAbjePE9WP52K4ELp0ebuK1k9AxGbHRRaMUSj1wapdFgkuXw';

  //   // URL для запроса сделки по ID
  //   const apiUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/contacts?filter[name]=Test`;

  //   const checkContactUrl = 'https://crmamomipinstitute.amocrm.ru/api/v4/leads/20634961'
  //   // Опции для GET-запроса, включая заголовок с access_token
  //   const options = {
  //     headers: {
  //       'Authorization': `Bearer ${accessToken}`,
  //     },
  //   };
  //   const phone = 777
  //   const addNote= [
  //     {
  //       note_type: 'common',
  //       params: {
  //         "text": `новый данные:
  //         телефон: ${phone}`
  //       }
  //     }
  //   ]

  //   // Выполните GET-запрос к amoCRM API
  //   const response = await axios.get(checkContactUrl, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //       'Content-Type': 'application/json'
  //     }
  //   });

  //   if (response.status === 200) {
  //     const leadData = response.data;
  //     res.status(200).json(leadData);
  //     console.log(leadData)
  //   } else if (response.status === 204) {
  //     console.log(response.status)
  //     res.status(200).json({ status: response.status })
  //   } else {
  //     console.log(response)
  //     res.status(response.status).json({ error: response });
  //   }
  // } catch (error) {
  //   console.error('Ошибка при выполнении запроса:', error);
  //   res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  // }
};

export default tokens
