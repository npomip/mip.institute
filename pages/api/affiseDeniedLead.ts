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
const AFFISE_NEW = process.env.AFFISE_NEW

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
    const decodedData = decodeURIComponent(req.body)
    const parsedData = Object.fromEntries(new URLSearchParams(req.body))
    const id = req.body &&  parsedData['leads[status][0][id]']

    // console.log('----------')
    console.log('res', parsedData)
    // console.log('----------')

    if(req.body) {
      const newLead =  await checkOrUpdateTokens()
      // console.log('NNNNNNEWWWW LEEEEAD', newLead.access_token)
      const checkLeadId = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/${id}`
      
      const access_token = newLead.access_token

      const options = {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }
      };

    const checkLeadIdResponse = await axios.get(checkLeadId, options);

    const leadData = checkLeadIdResponse.data

    const click_id = leadData.custom_fields_values.find(item => item.field_name === 'clickid').values[0].value
    const lead_id = leadData.custom_fields_values.find(item => item.field_name === 'id заявки').values[0].value
    const amount = leadData.price
    console.log('leaaad =====>', click_id, lead_id, amount)
    // console.log(leadData)
    // постбек на отклонить
    const newresponse =await axios.get(
      `https://edpartners.scaletrk.com/track/conv-change?click_id=${click_id}&amount=${amount}&token=${AFFISE_NEW}&adv_order_id=${lead_id}&conv_status=rejected&goal_alias=1`
    )
    console.log('EDPARTENRS', newresponse)
    }
    
    res.status(200).json({ message: 'Данные успешно обработаны' })
  } catch (err) {
    // console.log('errrrr', err)
    res.status(500).json({ message: 'Ошибка обработки данных' })
  }
}