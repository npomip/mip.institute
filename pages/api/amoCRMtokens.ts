import axios from 'axios';

const tokens = async (req, res) => {
  console.log('reqqqq========>', req.body)
  // Параметры запроса
  // const clientId = ; // Замените на ваш реальный client_id
  const clientSecret = "yJkCKv0Zivitn6YjVmFjRv8iCZJdIRR7u3clBsntHgFEtJkDTqVhyMQDaiJwORCy"; // Замените на ваш реальный client_secret
  const { code } = req.query; 

  // Подготовьте данные для POST-запроса
  const data = {
    "client_id": "639746a8-043f-458d-abae-080bbfc87f60",
    "client_secret": "mUQeKHhs1QIG732HqpRH5PWW395HLnRO9TCnb7yH6AELILrLQa5h3QeQ8lKwlYS1",
    "grant_type": "authorization_code",
    "code": code,
    "redirect_uri": "https://mip.institute/api/amoCRMtokens"
  };
  console.log('type=====>',code)
  

  try {
    // Выполните POST-запрос к /oauth2/access_token
    const response = await axios.post('https://www.crmamomipinstitute.amocrm.ru/oauth2/access_token', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Ответ с токенами
    const tokens = {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
    };

    // Отправьте токены в ответе
    res.status(200).json(tokens);
  } catch (error) {
    // Обработка ошибки
    console.error('Ошибка при запросе access_token:', error);
    res.status(500).json({ error });
  }
};

export default tokens