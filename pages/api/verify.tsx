import axios from 'axios';

export default async function handler(req, res) {

  const {
    token
  } = req.body;
  console.log('req.body', req.body)
  // const token = JSON.stringify(req.body)
  console.log('tttttt', token)

  try {
    const response = await axios.post(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${token}`
  );

    if (response.data.success) {
      console.log('Success');
      res.status(200).json({ success: true });
      console.log(response.data)
    } else {
      console.log('Error');
      res.status(500).json({ success: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
}