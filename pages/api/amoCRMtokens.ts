import axios from 'axios';

const tokens = async (req, res) => {
  console.log('reqqqq========>', req.body)
  // Параметры запроса
  // const clientId = ; // Замените на ваш реальный client_id
  const clientSecret = "yJkCKv0Zivitn6YjVmFjRv8iCZJdIRR7u3clBsntHgFEtJkDTqVhyMQDaiJwORCy"; // Замените на ваш реальный client_secret
  const { code } = req.query; 

  // Подготовьте данные для POST-запроса
  const data = {
    "client_id": "9118f965-6418-42bf-8825-afe91bc0b177",
    "client_secret": "fq1AWRNAOx9HCpvRBfp6lfpj8kqyU3umywr2P4Uiibhm7Mll5lv2Zgeshj5HXzCl",
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