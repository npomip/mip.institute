import axios from 'axios';

const tokens = async (req, res) => {
  // Параметры запроса
  const clientId = '0073ec4e-1397-4b6d-819d-bfd13767fe70'; // Замените на ваш реальный client_id
  const clientSecret = 'BSa9QOIOe2NZ728l1B0rF2KkQS4vwHOXPNXgBYOO9buXj5PuTN7onOsexDIcJAzw'; // Замените на ваш реальный client_secret
  const redirectUri = 'YOUR_REDIRECT_URI'; // Замените на ваш реальный redirect_uri
  const code = 'def5020039e3d21c63af789b447e0d2b2df2d4c4402c847456c9afd3f7b142019cdf8ae8aa8ebd510c640284032245baa42956cc412c328ffaf534aeabb56d619057efafb7a25edf76533427c07a04a8a0102fbceb89a9d4495e5fb65a0a00136203136652df1a39d504f738ccbe495542399bebceea6906ce3b1305ae645c9988c59f947821228a3c5f92feaf94ba7f98f3ba138638bf02dd3906e8922287aaba71bb6483334a869b86d89303902736bb2fe8d51208f2340c3112800aaf39125ce7b6cb1fac234f80bf1b5aa82397bf302c2b01e7fb57f1d69cebdb1999f626869c1f7269d03b76d63ec1a8dba8300767e88c60ce551df134898519d1360a4a8fcda19d968459ccb0c17111e01440b9e3635f9a88344580ac7e7d4635eeb6204edb960f9e239873afc291acec8e145b355551d06c4616c00e2322aa2bbe76d717e4fc1a36b020b04771964b0aa330fb6c741fbec1105a80b5d53de753488d75c0c130699eaaded7d991aaa4db10061906794496bfe4fc70c7151add0628a2bfee5501b117bae9af1f7056b1e78b63821f5b197b45da15c3ce792c50abb06bbe21eda4f9836d3fe4c5d0ace931e65c57d9345032ed7513cf5b0e86589a84a5119dc7d5045f155e2be90c93f4ce9409789f3040ed8756d8b3e2ca364f35dfbd67f16dca8d76'; // Получите код авторизации из запроса

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
    const response = await axios.post('https://www.amocrm.com/oauth2/access_token', data);

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