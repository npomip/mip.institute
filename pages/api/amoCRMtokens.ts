import axios from 'axios';

const tokens = async (req, res) => {
  // Параметры запроса

  const clientSecret = "iCeYljT2PFzN9KoxBuMTwVoeLSEq0PEoFKRtGAq1Is32gLKewpp5SVriMYTeiLK7"; // Замените на ваш реальный client_secret
  const code = 'def502000bbaf5ae177f16a668249610a254bbe721c4c19a840bdcc075b747bce988a56a7877ff0547677434e1dfd2bd67634525bc9dfb198ab15c3aa1640ea319e26310481dd32b24325b06c62075bf77830fdc9b10558e561afcb8ba2a66e97cebc1b08b3bf8eb61d98d6c8c3dbd569b043e850bf745d6f75c768930b1033bef2ba3614dd54048bc402ce999620858a95ae48b2cac8a55d63641fab471f20e454e6ff3429f8b6a8c1f92039062e2daba0afb461e686aed0ab95c09be9e1734cd117fcac132f30044d63c575870085e90b3e3d945325d8ff2d5bc5af0edceefe50081c78ed49eb4c41d7c6d501ffa1ff2e22ee80420fad257827f702cb7944335576f1106387e7d4823c7b149ab3ad2fdfe7eae8bd9b3457b628ee48b60b76a06172fd73b8f6968d5c5b916b3330e6bf3f763a22cc50a0dc2e4deb6f8f41f05753e1d2efbf7ccc982db18a609d82e20dc9c16a4e268c8a7b9680c7a88171bfe3263454552c1daa2f6f9d4bf400ea184ba1aef755c71c8df54c4695763b5d54c01fc170f72687fde71229974d0fb4bf5b477b075ac67afeb415a83bfd25476a614bbd0ff6d4387cf50da93fe03c1b8bb26862ff2e0911a236c76ccb71582423b259d13271a6b24a8bf526c13c659eb92ab880dba1707528d796cb54dbfba39a7c483db2a8917a7b183899632f88acda1d3b8a4ba1f7da102'

  // Подготовьте данные для POST-запроса
  const data = {
    "client_id": "95a7b06e-c0a6-450c-ba33-0a385bd805b6",
    "client_secret": clientSecret,
    "grant_type": "authorization_code",
    "code": code,
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
    res.status(200).json(response.data);
  } catch (error) {
    // Обработка ошибки
    console.error('Ошибка при запросе access_token:', error);
    res.status(400).json(error.response.data);
  }
};

export default tokens
