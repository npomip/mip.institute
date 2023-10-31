import axios from 'axios';

const patchLead = async (req, res) => {
  // const {id, name, price, phone} = req.body
  // console.log('patch id', id, price)
  try {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY0ZjIxZDJjODkzM2JiNzM2ZWU1MGJlNDcwOTYxOGMyZWU4MjdiMDhhYWFmZGNhZTQxZjc5MTYxMjc3YTFkNWY3Mjg3NGRkNjhlYmM3MzJlIn0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiI2NGYyMWQyYzg5MzNiYjczNmVlNTBiZTQ3MDk2MThjMmVlODI3YjA4YWFhZmRjYWU0MWY3OTE2MTI3N2ExZDVmNzI4NzRkZDY4ZWJjNzMyZSIsImlhdCI6MTY5ODc0MjEwOCwibmJmIjoxNjk4NzQyMTA4LCJleHAiOjE2OTg4Mjg1MDgsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.aW3GwXP5VSHDiQhjEO_GLb7bgO3_ey4oiPDRv5lv8ec2woT-12v8hYi4F4imCC_UftnWRvL80wjZFoCgpcrmNPC9KIU8QH0t3uNmE8w7ZqPIFqTMULRfAxA7Vow0T6_wEo3hce7DCd3Nksa7DJZPGe2Ugyv9Aq0RJyg-if1gD72dD5bGrnMYtgv1RBcsi70We8McViI5E07yPKaL7svj8I78x0lDrYG1R7p8NKaW43g7c6z-kr22PI9maqjmiaEyrAfvpVrzxNdogXqdWcwUMYzXaymaYqKSchAzy0DlBWvYN4HlDVvQn6ADXYIf7DgHEiNvYjQoOJeqx_87rWzedQ';

    const checkContactUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/leads`

    // Опции для GET-запроса, включая заголовок с access_token
    const leadsData = [
      {
        id: 20717327,
        name: 'New integration',
        custom_fields_values: [
          {
            field_id: 704681,
            values: [
              {
                value: "Гештальт-терапевт"
              }
            ]
          },
        ]
        // price: '1000',
      }
    ]

    // Выполните GET-запрос к amoCRM API
    const response = await axios.patch(checkContactUrl, leadsData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const leadData = response.data;
      console.log(leadData)
      res.status(200).json({ status: 200, msg: 'Lead updated in patch' })
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

export default patchLead
