import axios from 'axios';
import moment from 'moment';

const tokens = async (req, res) => {
  // console.log(moment().unix())
  
  try {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA0NWFhZTc1NTU0NGI2YWYyNjE3OTM1MjBiOWVlM2FkYmFlNDA2OGM3NzgxNjE1MmViZjk3MjAwYjJmMDM3ODU2YWZlMmRkODBhZjVlNWU5In0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiIwNDVhYWU3NTU1NDRiNmFmMjYxNzkzNTIwYjllZTNhZGJhZTQwNjhjNzc4MTYxNTJlYmY5NzIwMGIyZjAzNzg1NmFmZTJkZDgwYWY1ZTVlOSIsImlhdCI6MTY5ODg0MTg0MiwibmJmIjoxNjk4ODQxODQyLCJleHAiOjE2OTg5MjgyNDIsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.lQNyVlknGbWR0UeEmucrXaNCXMTVXyF8Ot2Nms_wSXs0lZofIkGMqMDv2dPDHO5UJE0FP-F4FaHkQlkpyj2EXMALYN5dS-WpWC6AquaNH_Xo1lcr8T0M_44uGL7obp6cq3J8nOhNAVmx8uv0edb96-nq8GSuiLBBI7WLWB_3tZf_yuUrY0FLEVJpeMOrbVuijAyA2CY5uJq5X1I1krWYM7H2Gqvwfi5mo_nnZT76hEci180eln3Eu83-9PoPcIckHcBaUeerbJ3v714SNq1Ha0WSwj4G6Y-aoUZ-WD3QL6uV5Y4TlxH9zRg-kQwsiU6j7CHLq0601mz3jzW0FYdECg';

    const checkContactUrl = 'https://crmamomipinstitute.amocrm.ru/api/v4/leads/20717327'
    // https://crmamomipinstitute.amocrm.ru/api/v4/leads/custom_fields/704681- список программа доступных
    // Опции для GET-запроса, включая заголовок с access_token
    const options = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    };
    const phone = 777
    const addNote= [
      {
        note_type: 'common',
        params: {
          "text": `новый данные:
          телефон: ${phone}`
        }
      }
    ]

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
    console.error('Ошибка при выполнении запроса:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
};

export default tokens
