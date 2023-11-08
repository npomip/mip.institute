import axios from 'axios';
import moment from 'moment';

const tokens = async (req, res) => {
  // console.log(moment().unix())
  
  try {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVlOGEzMjM3NDkzNzVjZDAwMGRmOGRjMWM0ZGMzMzJiNGQwZDllNzM3NDdlN2MzZGQ2YmYwN2E1Y2ZkMDc4Y2UwODJlMGNjOGM3NjU5Y2FhIn0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiJlZThhMzIzNzQ5Mzc1Y2QwMDBkZjhkYzFjNGRjMzMyYjRkMGQ5ZTczNzQ3ZTdjM2RkNmJmMDdhNWNmZDA3OGNlMDgyZTBjYzhjNzY1OWNhYSIsImlhdCI6MTY5OTQ0MzM4MiwibmJmIjoxNjk5NDQzMzgyLCJleHAiOjE2OTk1Mjk3ODIsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.Bly1q9nIeSvGIdWhpj_NFlyzMS46Im7Pwfefe4foS6Lx0V4HQFfY5L6tvHOeTD-S6x45JtShOAnuXiZKgtIrYfD8EmI4mFxFfxSi1yCYhrmj90932U-hJ4gAFsOEX34Eqzj7ntIvIa5X87Z8xRPylbhpIMiqaECi42FGaeOc0yhqmGWMnAI3koBWHwTp7kVdYQGu3oRyYgRYUgvND0IiRKdx5EIltGtFVZhhnfFx57YEeymqeEC1cos7Fx2ZC-oLBiW_tcNmyubTFafOwZkxwp_Bx_KgE9SiIhoVsc4qU3O0dZL6aKsEATVGKypTnXxx4jGVRYKuxisQZj11OU2eCg';

    const checkContactUrl = 'https://crmamomipinstitute.amocrm.ru/api/v4/leads/20827093'
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
