import axios from 'axios'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { price, utm } = req.body
  const offer_id = '2319'
  console.log(req.body, 'req.body');
  
  try {
    const newresponse = await axios.get(
      `https://sravni.go2cloud.org/aff_lsr?offer_id=${offer_id}&amount=${price}&transaction_id=${utm?.utm_content}`
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
