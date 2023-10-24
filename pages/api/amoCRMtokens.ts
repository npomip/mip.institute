import axios from 'axios';

const tokens = async (req, res) => {
  // Параметры запроса
  const clientId = 'fd4f102c-150e-4d56-9cf5-e53a92e8a5d4'; // Замените на ваш реальный client_id
  const clientSecret = 'yJkCKv0Zivitn6YjVmFjRv8iCZJdIRR7u3clBsntHgFEtJkDTqVhyMQDaiJwORCy'; // Замените на ваш реальный client_secret
  const redirectUri = 'YOUR_REDIRECT_URI'; // Замените на ваш реальный redirect_uri
  const code = 'def502002bc9556cb4b4027c589dfdc733a496b48e46512660386883e67562a92b1a09609270e8a7e53b5c85f1319b94cfacba14857f981a97400fa27a47d2726d01274a0b3bc5bb95f8adffd5731777d2ac8dcd1ad0b931f9734db9b5d94037d8370569b73f7b09819b4247c6898034f61668a74522c863eed641be9523120e612103a0e22671e3adfd45639b6e6d3613b48eeb959256e3a5efa5987f0e92be4f05fe4a994b1016dc715da6e78e6398a82b6b2a3baa24c0d9b65135c344167cab4eaf5e692ae237e452868dd6a07b2953863e74de08cd0b4e8249f003cc5ed22929e20800eb1e572f5af878308c380476c3ae1619c454a14108c0d7d9c677657e339934377779d621292c704ad3df1182ccb030de7b424edb4c04a9fce8860057faa95ef12f02b7cbf0729a17210d098dffef32f071dda6e6a64f15a877892a28664eeb07778cfe9f0886f4b1b0f8227990531f39f5c7f274222bb245744f5f4e9095ed422f3a662b4c48e7008caf56f1dccd63d82c2aefc92f9a4dd77745c69f33d7570534cc00f1b57926f2168a0f67f6296e2334f50c0d6011febe2f6accc6a01151164572dd2cd63e3ab32e0e966f4565cca48ce30aba69afabc9a18492bf0c97596896f48974cc41d62b525362a4d59a12c680cba72705919bcf3d7dc92f6612d824'; // Получите код авторизации из запроса

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