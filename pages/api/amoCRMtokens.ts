import axios from 'axios';

const tokens = async (req, res) => {
  console.log('reqqqq========>', req.body)
  // Параметры запроса
  // const clientId = ; // Замените на ваш реальный client_id
  const clientSecret = "nW5Bjw8iqTkbXRS5gndurGCjvtq1V3hXYuPSSbXyZegFbLxbJgHnOvvD8fLwEZJ2"; // Замените на ваш реальный client_secret
  // const { code } = req.query; 
  const code = 'def502004aaae19de17cb1d1c28210dfc7ce4c23b4edde207fe1e21aa467ade6ff33a4e3b4d72cabe46a3ccd5766ff626f9bbad5d1f801c01e644b90ee963c2a0209b6c9f3f8df4266623891814c49534eb82bba711ee2c1ad4b336ce0d4df4af38de9ff521c42ac9237df5da67eeacf348aec015335978ffa717028d426f25a56045f14c4cb04a67a5a1c2ca1e28926ab0db6ed053c040eccf7f78b8c7f30ff7148f13d996db6086bcbcf09a5f3367b8a98e93330d6971ddf61198e2c1a6ee7913a50480dfc8771bee2f228fbdb8be608a587cd5f199912f7a9ebd21ecc6c08c467452afaaab0389bee325ab447599df1b72a9352a9bd2573634391d17fc871642be21bb01a11a93bbcf27554a5ebaf527d3a74b62ac32182576996798aefd05efed2257e7e92753f48ebeaa10aebd55b49ba5fe17c15dd85c46bacde4766a098e3d8af4b2e7a8097f95e3c467e118ee1c45eedf6f931fc81e9a79e0226f2286af2b4bf7ac5bb1e3077f7c44863fa5f28a7fb057935f83bf20201d7d294409a235f8fb102c7c705bea9cc6a0c68357d5bad321f807861097785dbdb4927817e303554f95b5728757f7e55fbca6336a63514a702b9d502279b2d6402bfa860fd1f99120c0492bd4041e53bba628238db33be41a03591ad63723f047a1127505f62772351df5cf3f5f51079bec36464eef5a9657408c5a1a2'

  // Подготовьте данные для POST-запроса
  const data = {
    "client_id": "34a4fcbd-ce38-442e-8f1d-878578f18f20",
    "client_secret": clientSecret,
    "grant_type": "authorization_code",
    "code": code,
    "redirect_uri": "https://mip.institute/api/amoCRMtokens"
  };
  console.log('type=====>',code)
  

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
    res.status(200).json(response.data);
  } catch (error) {
    // Обработка ошибки
    console.error('Ошибка при запросе access_token:', error);
    res.status(500).json({ error });
  }
};

export default tokens

// {"token_type":"Bearer","expires_in":86400,"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3OTU2ZDlmZDdlZmEzNGUyNTU3YmVlNTE1MTFhZGZhYTI4YjFkYzA3MjFjMWI3NzhhNjNkM2M4NzM1MzE1ODk0MGI0MzIxNzM3YTFlOWQzIn0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiI1Nzk1NmQ5ZmQ3ZWZhMzRlMjU1N2JlZTUxNTExYWRmYWEyOGIxZGMwNzIxYzFiNzc4YTYzZDNjODczNTMxNTg5NDBiNDMyMTczN2ExZTlkMyIsImlhdCI6MTY5ODE0Mzk1NCwibmJmIjoxNjk4MTQzOTU0LCJleHAiOjE2OTgyMzAzNTQsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.rUWkNoVY2aHrS20N2H7Dy1cb-uuQVqwmPzOK4SKrcLzbR5giWvgRYh8NeFY4JajaJS9DHuLd9fP6_IVj5AMZ9BSy6FnkMg-XAWCKxsqOh2ssafk7vQVZa99Vklt68b2sc6lQI4tlKk8ZQonxoH6EjwN5oCxzIeYQGG1A-boh0FqDQdoa702cMX3FquHc9gdQcUP9d66veBXqsC4boxH9iOS0zQBx-Ir51__wS38xgmyd9P23pfhw-s-aWG4lm63dhZmIilSrHLM1g5jMipOvMRBbjVxsb5b7wmgZJx_eE3ATXncHDQeKS-gR7QxtXRzkmxG7-JiatbKYIpbYgCTZzA","refresh_token":"def50200709682cc1d1750a7d1dd33d571061927afba072d23f748889fc5e0a8693581f1ed25204a22468f466793b8c5b9286e755b706333b05b6e437f171a08e449cd6bc3514bee781e19fac0b7aa03595a30a83a5893e1e7d9bbb35ff376f9d4b9d7f0db6897f7a574b99da0189e5cef9ab85c979582a798b1211e3528600b175e8321a03c974fdbb3e0e418713fbbc859fc038e2c0ac6e99e9754c65d272fb3fcf9630cc32a143cfd14a708bbba6b899662ca1c8c73d7b31c6bbf2ff5488a07d6ba6c2523bd8c0c68471f3ce03d7e3eb909dd1ed4be2492f48e126df8728e811317bf4e6ea028eebd2604a048c98e0b191cdf223f1f1766b651c8dba7ffc3ab711d77971ad6383dc666ebee9e3ffc5152ca7587a748adaaeae062c68bd4b607ed36a6cf89f1c749bb25d8883451ce6fdfcec65b82042982c6ffabca7946c84f3cf2fda4a59c19f4eaa5b854442566d21e46b16c9273d2aff01f9ee6cb057e0d2d09ae37c5be64b9f798318f2465788269b4021c5f4dabe5a4890226b2eaf6e9ec818418d533b917ae9e34058ed4ee96fbe4de4819b5a115ac62aa186001643af3635da1720262d1202e1e097173317c26e4eef36af3da6c7ab6963eedeff7ed0e43abd38b3cf624e5d3ef0074ea5c7e6bf50b25d131a90eefc6c150735e99bb7e0ad17065ebd05f268941d5"}