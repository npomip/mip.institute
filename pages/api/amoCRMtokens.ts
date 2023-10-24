import axios from 'axios';

const tokens = async (req, res) => {
  // Параметры запроса
  const clientId = 'fd4f102c-150e-4d56-9cf5-e53a92e8a5d4'; // Замените на ваш реальный client_id
  const clientSecret = 'yJkCKv0Zivitn6YjVmFjRv8iCZJdIRR7u3clBsntHgFEtJkDTqVhyMQDaiJwORCy'; // Замените на ваш реальный client_secret
  const redirectUri = 'YOUR_REDIRECT_URI'; // Замените на ваш реальный redirect_uri
  const code = 'def5020003e6ff2c4d10e84152c4102e1bdac0be3d0fae6676c0b24fae896900078db22aa4a73e28dc4becbd7281b5ebb687d49ae28df444c936c52b662edaf87cafa5a93b5cfbaeb9cd6a8b71203fc711a55d39046527a9f2867c0126df79a9ba4664d7283160bf733ef77a37e9427b90d5090b9d274f1d5557182355043816f87c1faaafb5c356c8b11aac176be39bb8cdc0a312b546103b0edbae41bbc50e4ca7d76d174b6e1608134b871abca198d9de745821577785e1adf9546b39498384472e7d621e8a34c2cfabbf0e46c27e98a3b764684585c635b2dc217810ccdb1f3f7b83c473c5b29afd837ae99ad3d16f96dc4d1b38c005bd23cab3a700f4de7dca1ca7b8d4efafb24e853ee0313724a984d603eeb68bdbce32840f3bb67261a4a68c6112923b336a5a6fe3ae4913d6b3c266be74ca5ade78d0d9ced38fdd149fec61fe4e5ca6a634ac92773ffcabbbb2c6f1212e0b5ad25554a2db27e94036240b40107f5f883fc3331192073e19f521d00590f940212938c7c3622a2a978ba3528ca397b578f0f3862d78ca704a09bc9d47220b716ef146eeaf662b91e24437f10f3323e9dd334d3c80eef2859c55af8c30be6858d8d5c8e50e4af98b65b606ff7f65c05788e4e96871fc9c2aa32e44aa598499dd45927a71ece94ea8428715393a696d'; // Получите код авторизации из запроса

  // Подготовьте данные для POST-запроса
  const data = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: "https://mip.institute"
  };

  try {
    // Выполните POST-запрос к /oauth2/access_token
    const response = await axios.post('https://www.amocrm.ru/oauth2/access_token', data);

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
    res.status(500).json({ error: 'Ошибка при запросе access_token' });
  }
};

export default tokens