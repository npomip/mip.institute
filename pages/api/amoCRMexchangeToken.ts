import axios from 'axios';

const exchangeTokens = async (req, res) => {
  
  const {refresh} = req.body
  console.log('refreshtoken========>', refresh)
  // res.status(200).json({status: 'ok'});
  // Параметры запроса
  // const clientId = ; // Замените на ваш реальный client_id
  const clientSecret = "nW5Bjw8iqTkbXRS5gndurGCjvtq1V3hXYuPSSbXyZegFbLxbJgHnOvvD8fLwEZJ2"; // Замените на ваш реальный client_secret
  // const { code } = req.query; 
  // const refresh_token = 'def50200cd287435f94ea7625aed289c28ca1671606715bf9852d82dbcdc6ec437a5fd1cba0fa0f62573a93085f59f495938da5bf1bf8e85cacb17f98bd9cb58a1ae86f43d11ae32b2efd74db309d151ef609b368ccd3996bf9bffa64f92fe0e5ccdd9da61587554dc2a271dd63c30c13523fa93967bea16f0d731f2e2bf01aba71c6f0310bb247accc8515e81b09a2e6744b1d4b8f39c782d60c639176aeae61638878d33ab8f65d64450cb809feceec60afc438fa1588739d4428f7318a08e7a98dd50f8bf54f94318497ddb53c3c863759120dfb65d3e8b62d574901315c939bac00a436c8cf0044cec6655c27b433b346dced56d4f32d93183db109230b433e87afde78580da5b67c9ce39f2294d4ba1f6d409792750020b1e7fc56d885a48caf3e81ae4502807b00c7cedbe479c61e2345f847db7e31c7a75dcec01aafb5733fce4888114c75fa0ed87e58c17cf688e22fbec205078578aef3fe1055d4ffb422358d155b8469a2836eee8231ca49d13fbcb1b2ab1b07e1d0603f4dbcf88694e2428bd3ee4a4972a461cac079ce7522ea1b83f3322446ce209a4b1a6dbe25696ff2f1ac3916ba617691d9291fd922b6f0b8e0a0ebef65f10a1eb15709b81e4931046f2f9868d327fdadbbb668e7185ed38fbd012a48eab8bf42d91df6044a79337fbe18e67c161b1a4709f'

  // Подготовьте данные для POST-запроса
  const data = {
    "client_id": "34a4fcbd-ce38-442e-8f1d-878578f18f20",
    "client_secret": clientSecret,
    "grant_type": "refresh_token",
    "refresh_token": refresh,
    "redirect_uri": "https://mip.institute/api/amoCRMtokens"
  };
  

  try {
    // Выполните POST-запрос к /oauth2/access_token
    const response = await axios.post('https://crmamomipinstitute.amocrm.ru/oauth2/access_token', data, {
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
    res.status(400).json({ error });
  }
};

export default exchangeTokens