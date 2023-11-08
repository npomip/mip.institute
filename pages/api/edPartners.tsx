import axios from 'axios';

export default async function handler(req, res) {

  const {
    id, 
    utm,
  } = req.body;

  const AFFISE_SECURE = '52a8e11b51829d94c21366df6ba899e6'
  try {
    console.log('edpartners', req.body)
    const response = await axios.get(
      `https://offers-edpartners.affise.com/postback?secure=${AFFISE_SECURE}&goal=1&clickid=${utm.cl_uid}&comment=offer&action_id=${id}`
    )

      console.log('Success');
      res.status(200).json({ success: true });
      // console.log(response)
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  }
}