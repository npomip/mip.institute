import axios from 'axios';
import moment from 'moment';

const tokens = async (req, res) => {
  // console.log(moment().unix())
  
  try {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY0ZjIxZDJjODkzM2JiNzM2ZWU1MGJlNDcwOTYxOGMyZWU4MjdiMDhhYWFmZGNhZTQxZjc5MTYxMjc3YTFkNWY3Mjg3NGRkNjhlYmM3MzJlIn0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiI2NGYyMWQyYzg5MzNiYjczNmVlNTBiZTQ3MDk2MThjMmVlODI3YjA4YWFhZmRjYWU0MWY3OTE2MTI3N2ExZDVmNzI4NzRkZDY4ZWJjNzMyZSIsImlhdCI6MTY5ODc0MjEwOCwibmJmIjoxNjk4NzQyMTA4LCJleHAiOjE2OTg4Mjg1MDgsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.aW3GwXP5VSHDiQhjEO_GLb7bgO3_ey4oiPDRv5lv8ec2woT-12v8hYi4F4imCC_UftnWRvL80wjZFoCgpcrmNPC9KIU8QH0t3uNmE8w7ZqPIFqTMULRfAxA7Vow0T6_wEo3hce7DCd3Nksa7DJZPGe2Ugyv9Aq0RJyg-if1gD72dD5bGrnMYtgv1RBcsi70We8McViI5E07yPKaL7svj8I78x0lDrYG1R7p8NKaW43g7c6z-kr22PI9maqjmiaEyrAfvpVrzxNdogXqdWcwUMYzXaymaYqKSchAzy0DlBWvYN4HlDVvQn6ADXYIf7DgHEiNvYjQoOJeqx_87rWzedQ';

    // URL для запроса сделки по ID
    const apiUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/contacts?filter[name]=Test`;

    const checkContactUrl = 'https://crmamomipinstitute.amocrm.ru/api/v4/leads/20717327'
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
      console.log(response.status)
      res.status(200).json({ status: response.status })
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
