import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { env } from 'process';
import routes from '@/config/routes';

export default async function handler(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  const staticKey = '3ykOQzkL2X647dWw8dDx7h5c';

  try {
    console.log(req.body);

    const payment_id = req.body.object.id

    const generatePswrd = uuidv4()
    const time = Math.floor(Date.now() / 1000);

    const shopId = env.YOOKASSA_SHOP_ID_DEV
    const secretKey = env.YOOKASSA_SECRET_KEY_DEV

    const idempotenceKey = uuidv4()

    const url = `https://api.yookassa.ru/v3/payments/${payment_id}/capture`

    const auth = Buffer.from(`${shopId}:${secretKey}`).toString('base64')

    const headers = {
      'Idempotence-Key': idempotenceKey,
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`
    }
    const response = await axios.post(url, {}, { headers })

    console.log('api.yookassa.ru/v3/payments', response.data)

    const keyString = `${staticKey}${response.data.metadata.email}${time}`;
    const k = crypto.createHash('md5').update(keyString).digest('hex');


    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      // host: 'smtp.jino.ru',
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      logger: true,
      debug: true,
      tls: {
        rejectUnAuthorized: true
      },
      auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASS
      }
    })
    if(response.data.status === 'succeeded') {
      const emailRes = await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: `${response.data.metadata.email}`,
        subject: 'Ваша ссылка для обучения', // Subject line
        text: `
        Привет ${response.data.metadata.name}, вот твоя ссылка для обучения. Вперед к знаниям \n
        https://lms.mip.institute/local/ilogin/rlogin.php?un=${response.data.metadata.email}&pw=${generatePswrd}&ln=${response.data.metadata.surname}&fn=${response.data.metadata.name}&g=87&e=${response.data.metadata.email}&t=${time}&k=${k}, \n
        Твой логин: ${response.data.metadata.email},
        И пароль: ${generatePswrd}
        ` // plain text body
        // html
      })

      const res = await axios.post(`${routes.front.root}/api/checkout/genezisSuccessPayment`, response.data.metadata )

    } 
    

    res.status(200).end()
  } catch (err) {
    console.log('v3/payments errror', err.response.data)

    res
      .status(500)
      .json({ message: 'Ошибка обработки данных', err: err?.response?.data })
  }
}

// 5555555555554477


// 5555555555554592