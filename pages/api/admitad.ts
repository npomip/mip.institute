import axios from 'axios'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { order_id, price, admitad_uid } = req.body
  const campaign_code = '381f96bb08'
  const postback_key = '9ec3E32C0a9862cDD9C31C7251059F51'
  console.log(req.body)

  try {
    const newresponse = await axios.post(
      `https://ad.admitad.com/r?campaign_code=${campaign_code}&
    postback=1&postback_key=${postback_key}&action_code=1&
    uid=${admitad_uid}&order_id=${order_id}&tariff_code=1&currency_code=RUB&
    price=${price}&quantity=2&position_id=1&position_count=1&
    product_id=1&client_id=&payment_type=sale`
    )
    res.status(200).json({
      success: true,
      data: newresponse?.data
    })
  } catch (err) {
    console.log(err.data)
    res.status(200).json({ success: false })
  }
}
