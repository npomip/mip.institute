import axios from 'axios';

export default async function handler(req, res) {

  const {
    id, 
    utm,
    price
  } = req.body;
  console.log(req.body)

  const AFFISE_SECURE = '52a8e11b51829d94c21366df6ba899e6'
  const AFFISE_NEW = process.env.AFFISE_NEW
  console.log('edPArtenrs price', price)
  try {
    const response = await axios.get(
      `https://offers-edpartners.affise.com/postback?secure=${AFFISE_SECURE}&goal=1&clickid=${utm.cl_uid}&comment=offer&action_id=${id}&sum=${price}`
    )
      res.status(200).json({ success: true });
      // console.log(response)
  } catch (err) {
    console.log(err);
    const newresponse =await axios.get(
      `https://edpartners.scaletrk.com/track/conv?click_id=${utm.cl_uid}&amount=${price}&token=${AFFISE_NEW}&adv_order_id=${id}&conv_status=pending&goal_alias=1`
    )
    console.log('Success', newresponse.data);
    res.status(200).json({ success: true });
  }
}