import axios from 'axios';

const tokens = async (req, res) => {
  try {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3OTU2ZDlmZDdlZmEzNGUyNTU3YmVlNTE1MTFhZGZhYTI4YjFkYzA3MjFjMWI3NzhhNjNkM2M4NzM1MzE1ODk0MGI0MzIxNzM3YTFlOWQzIn0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiI1Nzk1NmQ5ZmQ3ZWZhMzRlMjU1N2JlZTUxNTExYWRmYWEyOGIxZGMwNzIxYzFiNzc4YTYzZDNjODczNTMxNTg5NDBiNDMyMTczN2ExZTlkMyIsImlhdCI6MTY5ODE0Mzk1NCwibmJmIjoxNjk4MTQzOTU0LCJleHAiOjE2OTgyMzAzNTQsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.rUWkNoVY2aHrS20N2H7Dy1cb-uuQVqwmPzOK4SKrcLzbR5giWvgRYh8NeFY4JajaJS9DHuLd9fP6_IVj5AMZ9BSy6FnkMg-XAWCKxsqOh2ssafk7vQVZa99Vklt68b2sc6lQI4tlKk8ZQonxoH6EjwN5oCxzIeYQGG1A-boh0FqDQdoa702cMX3FquHc9gdQcUP9d66veBXqsC4boxH9iOS0zQBx-Ir51__wS38xgmyd9P23pfhw-s-aWG4lm63dhZmIilSrHLM1g5jMipOvMRBbjVxsb5b7wmgZJx_eE3ATXncHDQeKS-gR7QxtXRzkmxG7-JiatbKYIpbYgCTZzA';

    // URL для запроса сделки по ID
    const apiUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/leads`;

    // Опции для GET-запроса, включая заголовок с access_token
    const options = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    };

    // Выполните GET-запрос к amoCRM API
    const response = await axios.get(apiUrl, options);

    if (response.status === 200) {
      const leadData = response.data;
      res.status(200).json(leadData);
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

// {"id":8240521,
// "name":"Новая заявка с mip.institute"
// ,"price":95000,
// "responsible_user_id":7975234,
// "group_id":0,
// "status_id":143,
// "pipeline_id":5028772,
// "loss_reason_id":null,
// "created_by":7803745,
// "updated_by":7803745,
// "created_at":1636113852,
// "updated_at":1646400082,
// "closed_at":1640681520,
// "closest_task_at":null,
// "is_deleted":false,
// "custom_fields_values":
//   [{"field_id":704891,
//   "field_name":"Номер договора"
//   ,"field_code":null,
//   "field_type":"text",
//   "values":[{"value":"null"}]},
//     {"field_id":704893,"field_name":"Предпочтительный способ связи","field_code":null,"field_type":"text","values":[{"value":"null"}]}
//     ,{"field_id":704895,"field_name":"Обращение","field_code":null,"field_type":"text","values":[{"value":"null"}]}
//     ,{"field_id":704897,"field_name":"Страна","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":704899,"field_name":"Город","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":705109,"field_name":"Промокод","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":705911,"field_name":"id заявки","field_code":null,"field_type":"text","values":[{"value":"c65d2ea0-3312-4d6d-85d1-cd555efad345"}]},
//     {"field_id":705913,"field_name":"Yandex Metrics ID","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":705915,"field_name":"Google Client ID","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":705917,"field_name":"Источник рекламы","field_code":null,"field_type":"text","values":[{"value":"yandex"}]},
//     {"field_id":705919,"field_name":"Тип трафика","field_code":null,"field_type":"text","values":[{"value":"cpc"}]},
//     {"field_id":705921,"field_name":"Название рекламной компании","field_code":null,"field_type":"text","values":[{"value":"poisk_obshie"}]},
//     {"field_id":705925,"field_name":"Баннер/Объявление","field_code":null,"field_type":"text","values":[{"value":"11281400172"}]},
//     {"field_id":705927,"field_name":"Ключевое слово","field_code":null,"field_type":"text","values":[{"value":"%D0%B4%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%20%D0%BA%D1%83%D1%80%D1%81%20%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3"}]},
//     {"field_id":705933,"field_name":"Устройство пользователя","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":997743,"field_name":"Страница на которой оставлена заявка","field_code":null,"field_type":"url","values":[{"value":"https://mip.institute/professions/prakticheskaya-psihologiya/prakticheskij-psiholog"}]}],
//     "score":null,
//     "account_id":29931190,
//     "labor_cost":null,
//     "_links":{"self":{"href":"https://crmamomipinstitute.amocrm.ru/api/v4/leads/8240521?page=1&limit=250"}},"_embedded":{"tags":[{"id":128895,"name":"old_amocrm","color":null},{"id":374937,"name":"Дубль","color":null}],"companies":[]}},



//     {"id":8239477,"name":"Шевина Дарья Николаевна","price":52500,"responsible_user_id":7975234,"group_id":0,"status_id":142,"pipeline_id":5028772,"loss_reason_id":null,"created_by":7803745,"updated_by":7803745,"created_at":1641132422,"updated_at":1646400086,"closed_at":1641994680,"closest_task_at":null,"is_deleted":false,
//     "custom_fields_values":[{"field_id":704617,"field_name":"На доступ","field_code":null,"field_type":"date","values":[{"value":1642626000}]},
//     {"field_id":704891,"field_name":"Номер договора","field_code":null,"field_type":"text","values":[{"value":"ПП-0050/03"}]},
//     {"field_id":704893,"field_name":"Предпочтительный способ связи","field_code":null,"field_type":"text","values":[{"value":"null"}]},{"field_id":704895,"field_name":"Обращение","field_code":null,"field_type":"text","values":[{"value":"null"}]},{"field_id":704897,"field_name":"Страна","field_code":null,"field_type":"text","values":[{"value":"Россия"}]},
//     {"field_id":704899,"field_name":"Город","field_code":null,"field_type":"text","values":[{"value":"Челябинск"}]},
//     {"field_id":705109,"field_name":"Промокод","field_code":null,"field_type":"text","values":[{"value":"Практический психолог с доп. квалификацией Психолог-психотерапевт"}]},
//     {"field_id":705911,"field_name":"id заявки","field_code":null,"field_type":"text","values":[{"value":"5815436e-06bd-4abc-a5b6-f64201b138df"}]},
//     {"field_id":705913,"field_name":"Yandex Metrics ID","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":705915,"field_name":"Google Client ID","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":705917,"field_name":"Источник рекламы","field_code":null,"field_type":"text","values":[{"value":"yandex"}]},
//     {"field_id":705919,"field_name":"Тип трафика","field_code":null,"field_type":"text","values":[{"value":"cpc"}]},
//     {"field_id":705921,"field_name":"Название рекламной компании","field_code":null,"field_type":"text","values":[{"value":"poisk_obshie"}]},
//     {"field_id":705925,"field_name":"Баннер/Объявление","field_code":null,"field_type":"text","values":[{"value":"11281154426"}]},
//     {"field_id":705927,"field_name":"Ключевое слово","field_code":null,"field_type":"text","values":[{"value":"%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%D1%83%D1%87%D0%B5%D0%B1%D0%B0"}]},
//     {"field_id":705933,"field_name":"Устройство пользователя","field_code":null,"field_type":"text","values":[{"value":"null"}]},
//     {"field_id":997743,"field_name":"Страница на которой оставлена заявка","field_code":null,"field_type":"url","values":[{"value":"https://mip.institute/professions/prakticheskaya-psihologiya/prakticheskij-psiholog-s-dop.-kvalifikaciej-psiholog-psihoterapevt"}]}],"score":null,"account_id":29931190,"labor_cost":null,"_links":{"self":{"href":"https://crmamomipinstitute.amocrm.ru/api/v4/leads/8239477?page=1&limit=250"}},"_embedded":{"tags":[{"id":128895,"name":"old_amocrm","color":null}],"companies":[{"id":13549837,"_links":{"self":{"href":"https://crmamomipinstitute.amocrm.ru/api/v4/companies/13549837?page=1&limit=250"}}}]}},