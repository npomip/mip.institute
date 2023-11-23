import axios from 'axios';

export default async function handler(req, res) {

  const {
    id, 
    utm,
    price
  } = req.body;

  const AFFISE_SECURE = '52a8e11b51829d94c21366df6ba899e6'
  try {
    const response = await axios.get(
      `https://offers-edpartners.affise.com/postback?secure=${AFFISE_SECURE}&goal=1&clickid=${utm.cl_uid}&comment=offer&action_id=${id}&sum=${price}`
    )
    // `https://edpartners.scaletrk.com/track/conv?click_id=${utm.cl_uid}&token=b308cd19&adv_order_id=2&conv_status=pending&goal_alias=2`
      // console.log('Success', response);
      res.status(200).json({ success: true });
      // console.log(response)
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  }
}