import axios from 'axios';

export default async function handler(req, res) {

  const {
    token
  } = req.body;

  try {
    const response = await axios.post(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${token}`
  );

    if (response.data.success) {
      res.status(200).json({ success: true });
    } else {

      res.status(500).json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ success: false });
  }
}