import axios from 'axios';

export default async function handler(req, res) {

  try {
    const response = await axios.get('https://eddu.pro/wp-json/test/v2/get_rating?id=71158')

    if (response.status === 200) {
      console.log(response.data);
      res.status(200).json({ success: true });
    } else {
      console.log('Error');
      res.status(500).json({ success: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
}