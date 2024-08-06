import axios from 'axios'
import checkOrUpdateTokens from './checkOrUpdateTokens'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const id = req.body &&  req.body['leads[status][0][id]']

    if(req.body) {
      const newLead =  await checkOrUpdateTokens()
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
    console.log(click_id,lead_id,amount);
    
    // const newresponse =await axios.get(
    //   `https://edpartners.scaletrk.com/track/conv-change?click_id=${click_id}&amount=${amount}&token=47e706c4&adv_order_id=${lead_id}&conv_status=pending&goal_alias=1`
    // )
    // res.status(200).json({ message: 'Данные успешно обработаны', response: newresponse?.data })
    }
    
  } catch (err) {
    res.status(500).json({ message: 'Ошибка обработки данных', err: err?.response?.data })
  }
}
