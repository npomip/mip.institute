import axios from 'axios';
import moment from 'moment';

const tokens = async (req, res) => {
  // console.log(moment().unix())
  
  try {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImExMGMxZjNlZWFhYjZlODQ3YjI3NzA0NDVkMWZkOTdhMWMyZjcxNDdjZDRmN2E0OTlkYjlmYmI4MWQ5YWIwYWEwN2U3YzliYmY1MDUwZWU5In0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiJhMTBjMWYzZWVhYWI2ZTg0N2IyNzcwNDQ1ZDFmZDk3YTFjMmY3MTQ3Y2Q0ZjdhNDk5ZGI5ZmJiODFkOWFiMGFhMDdlN2M5YmJmNTA1MGVlOSIsImlhdCI6MTY5OTI2NTA1NywibmJmIjoxNjk5MjY1MDU3LCJleHAiOjE2OTkzNTE0NTcsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.LIQhWsv5HUj_xxV3j90upKVn9tUO-W-M_pUxC5jcUKi5sogGcgh9WdRZ1ggP9SlF8UXGuBtEat1LHbv_zCSdNX4spDvVAdtTOCiD1FxczfZO3NcZKMbWRUNGrRajxcLt8gyVTnskh8Mbcx8QQV0C2PYYQCweWzOmxLlSQdklvZylufPehRBGDCDGfr9lrChFTJIb1rir2mKQRMrCh6n-oYV8mnTAQ72cHyNJV_P8M_kj4DfYJCLuciisFPpE8iLyUHF6Sjp3IqFKmyuhScLyrIYHRwl0RMV8Wdlh_xaHMQSIKMt4qUeBavbb1y-EVxtxHRExYZcXxvP-TEE-8wgOBQ';

    const checkContactUrl = 'https://crmamomipinstitute.amocrm.ru/api/v4/leads/20744349'
    // https://crmamomipinstitute.amocrm.ru/api/v4/leads/custom_fields/704681- список программа доступных
    // Опции для GET-запроса, включая заголовок с access_token

    // Выполните GET-запрос к amoCRM API
    const response = await axios.get(checkContactUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const leadData = response.data;
      res.status(200).json(leadData);
      console.log(leadData)
    } else if (response.status === 204) {
      console.log(response)
      res.status(200).json( response.data )
    } else {
      console.log(response)
      res.status(response.status).json({ error: response });
    }
  } catch (error) {
    console.log('Ошибка при выполнении запроса:', error.response.status);
    if (error.response.status === 401) {
      console.log('asdasdas', error.response.data)
      res.status(200).json( error.response.data )
    }
    // res.status(500).json({ error });
  }
};

export default tokens
