import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default async function handler(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const payment_id = req.body.object.id
    console.log('payment_id=====',req.body);
    // const { payment_id } = req.body;

    const shopId = '403833'
const secretKey = 'test_9z6Pyfo60K9hu1J5GxKoJ5xQUUo2QWUzk09JlNLq7JE'

const idempotenceKey = uuidv4()

    const url = `https://api.yookassa.ru/v3/payments/${payment_id}/capture`;

    const auth = Buffer.from(`${shopId}:${secretKey}`).toString('base64')

    const headers = {
      'Idempotence-Key': idempotenceKey,
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`
    };
    const response = await axios.post(
			url, {}, {headers}
		)
    
    console.log('api.yookassa.ru/v3/payments', response.data);

  } catch (err) {
    console.log('v3/payments errror',err.response.data);
    
    res.status(500).json({ message: 'Ошибка обработки данных', err: err?.response?.data })
  }
}

// 5555555555554477