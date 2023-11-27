import CHECK_TOKENS from '@/components/funcs/CHECK_TOKENS'
import client from '@/lib/apolloClient'
import axios from 'axios'
import checkOrUpdateTokens from './checkOrUpdateTokens'

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '1mb',
//       urlencoded: { extended: true },
//     },
//   },
// };

export default async function handler(req, res) {
  const webhook = `https://webhook.site/c9710cb3-2761-4056-8d5d-44a707640c74`
  res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader(
  //   'Access-Control-Allow-Methods',
  //   'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  // );
  // res.setHeader(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  // );
  try {
    // const decodedData = decodeURIComponent(req.body)
    // const parsedData = Object.fromEntries(new URLSearchParams(req.body))
    // const id = req.body &&  parsedData['leads[status][0][id]']

    // console.log('----------')
    // console.log('res', id)
    // console.log('----------')
    // if(req.body) {
    //   console.log('in reqqqqqqqqqq')
    //   const { data: checkTokenData } = await client.query({
    //     query: CHECK_TOKENS,
    //     variables: { title: 'amo' },
    //     fetchPolicy: 'network-only'
    //   });

    //   const access_token = checkTokenData?.amos[0]?.access
    //   const checkPhoneNumber = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/${id}`
    
    // // Опции для GET-запроса, включая заголовок с access_token
    // const options = {
    //   headers: {
    //     'Authorization': `Bearer ${access_token}`,
    //   }
    // };
    // // Выполните GET-запрос к amoCRM API
    // const checkPhoneResponse = await axios.get(checkPhoneNumber, options);

    // const leadData = checkPhoneResponse.data

    // const click_id = leadData.custom_fields_values.find(item => item.field_name === 'clickid').values[0].value
    // const lead_id = leadData.id
    // console.log('leaaad =====>', click_id, lead_id)
    // console.log('EEEEEENDDDDDD')
    // }
    if(req.body) {
      const newLead =  await checkOrUpdateTokens()
    console.log('NNNNNNEWWWW LEEEEAD', newLead)
    }
    
    res.status(200).json({ message: 'Данные успешно обработаны' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Ошибка обработки данных' })
  }
}
