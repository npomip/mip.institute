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

// {"token_type":"Bearer","expires_in":86400,"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE2ZTMxZTZhNzg2YTgwZjUyZTAyOWNkMWI4MDg2YTE5YzBmMDcyMTI3M2UxZDcxYjY1YWI0MmM0OTdmZjZhYzg4ZmM0OWYxODE3NTRiMjM2In0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiIxNmUzMWU2YTc4NmE4MGY1MmUwMjljZDFiODA4NmExOWMwZjA3MjEyNzNlMWQ3MWI2NWFiNDJjNDk3ZmY2YWM4OGZjNDlmMTgxNzU0YjIzNiIsImlhdCI6MTY5ODU5MzMyMiwibmJmIjoxNjk4NTkzMzIyLCJleHAiOjE2OTg2Nzk3MjIsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.QP5jroQh_WegYwYLB1p7ELwStNsjrYhssHeLH_RgcwDgWQnuHxQS8hlxanG4rmuHEIPLu2jKXT1cFOFxHrIUgnKUS3a_80oSvftRyrRgN9UjpHu1zOo3w6_RxbaYtxAWau-2e-LW_vnuSq1p9WoG38uHViROQlM0R6p7enTR8uctAW0Y7z52_mC8ReobSKSANWioAivgVKOLaYOtTFK8a-mEuzXw9SArFqq56lOTyeEABBAXBmoVKFerHKtetEDzEHQHvlBASrDVv5Gr2TENBa_oJgiLspiLkf7rNTbQoL0qQlGvB9oF0mDRIOt4b1nlh4353TyfkqoX3sYgB4Q4DQ","refresh_token":"def50200aab0991784269f8139b4cd0580898867bc828cdd2a96299dd582a5af4363c60adada7945e29bc33b7a84a27892fc23d057d5f8123a18dee0edc6eef342bd5355a1319317350c306e2204993776bde796916e46f5447469c521a83c3100433682b1957dde7414fd516d8bace279398cf469c2855c57424a60784c35761466faa1d6fe614782ac0a5be4c69a72dba51cc0fbc73134640978bb866c339532a52258fa5156edad643410a8a9607cc16adefbf19d44ee7b72ac92de5975a7fcfb543fd399621665e69d0dd711d8ab128bd61d5ea310dcf24a1edbb9ccd4a830628cc78dff38f96b95403fe5245ec83bff281c599afb07a5c0ba5d4506a58f76f806d0a72a68f579a1c1054ccf0d459208bbe13253ce4020f2eaa2b79a2cee67d07404cea75bf06cf323cca1be1cb43fe82a32f23f59b0e9cb91d1d9bfe69696c6d1db33cffd066a1af210f79e260f8fd1b9a6cac5b59703efa1d390d171c73abdcfc8f336f33ed1853132041108ed5fd78f05f1aa4c70cf73dc50d385ebeaaeebddea7df8b42683f43e316103c3f1a86f048a8cf7c237684f4f3c5d9796edd27071d159463879c658689d2723027fa94b2321f25d7f6965acadbb1b7b5f1bd07fb7ba1baf3c64fb8d1894740eab8ddb3121b75ee7bb74ca0a47655409fc093ef46be4442f3263c69e978f62"}