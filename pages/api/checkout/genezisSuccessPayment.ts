import axios from 'axios'
import { env } from 'process'

const createLead = async (req, res) => {
  const {
    utm_term,
    phone,
    utm_campaign,
    surname,
    utm_medium,
    name,
    leadPage,
    id,
    email,
    utm_content,
    utm_source,
    price
  } = req.body

  function convertStringToObject(str: string): Record<string, string> {
    str = str.replace(/\?/g, '').replace(/\//g, '')
    var params = str.split('&')
    var obj: Record<string, string> = {}
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split('=')
      obj[param[0]] = param[1]
    }
    return obj
  }

  const reserveUTM = convertStringToObject(leadPage)

  //   // URL для запроса сделки по ID
  const apiUrl = `https://webhook.gnzs.ru/ext/site-int/amo/29931190?gnzs_token=b6ce2e21-c68e-476f-87fe-ae268db2e9c2`
  try {
    const leadsData = {
      form: [
        { key: 'phone', value: phone },
        { key: 'name', value: `${name} ${surname}` },
        { key: 'email', value: email },
        // { key: 'promocode', value: promocode || '' },
        { key: 'id', value: id || '' },
        { key: 'price', value: price || '' },
        // { key: 'question', value: question || '' },
        { key: 'leadPage', value: leadPage || '' },
        // { key: 'site block', value: blockForAmo || '' },
        {
          key: 'utm_source',
          value: utm_source || reserveUTM?.utm_source || ''
        },
        {
          key: 'utm_medium',
          value: utm_medium || reserveUTM?.utm_medium || ''
        },
        {
          key: 'utm_content',
          value: utm_content || reserveUTM?.utm_content || ''
        },
        { key: 'utm_term', value: utm_term || reserveUTM?.utm_term || '' },
        {
          key: 'utm_campaign',
          value: utm_campaign || reserveUTM?.utm_campaign || ''
        },
        { key: 'paid_success', value: true }
        // { key: 'roistat', value: roistat_visit || '' },
        // { key: '_ym_uid', value: ymUid || '' },
        // { key: 'referer', value: referer || '' },
      ],
      host: 'mip.institute', // домен вашего сайта (ОБЯЗАТЕЛЬНО)
      token: env.GENEZIS_TOKEN
    }

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(apiUrl, leadsData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      const leadData = response.data
      res.status(200).json({ status: 200, msg: 'Lead created' })
    }
  } catch (error) {
    console.error('Ошибка при создании нового лида:', error.response.data)
    res.status(200).json(error.response)
  }
}

export default createLead
