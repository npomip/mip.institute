import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { env } from 'process'
import routes from '@/config/routes'
import dev from '@/config/dev'

export default async function handler(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  const staticKey = '3ykOQzkL2X647dWw8dDx7h5c'

  try {
    console.log('start', req.body)

    const payment_id = req.body.object.id

    const shopId = dev
	? process.env.YOOKASSA_SHOP_ID_DEV
	: process.env.YOOKASSA_SHOP_ID_PROD
const secretKey = dev
	? process.env.YOOKASSA_SECRET_KEY_DEV
	: process.env.YOOKASSA_SECRET_KEY_PROD

    if (req.body.object.status === 'waiting_for_capture') {
      console.log('CAPTURE')

      const idempotenceKey = req.body.object.metadata.ik

      const url = `https://api.yookassa.ru/v3/payments/${payment_id}/capture`

      const auth = Buffer.from(`${shopId}:${secretKey}`).toString('base64')

      const headers = {
        'Idempotence-Key': idempotenceKey,
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`
      }

      const response = await axios.post(url, {}, { headers })
    } else if (req.body.object.status === 'succeeded') {
      console.log('succeeded')

      const genezisSuccessPayment = await axios.post(
        `${routes.front.root}/api/checkout/genezisSuccessPayment`,
        req.body.object.metadata
      )
      console.log(genezisSuccessPayment.data)
      // if (res.data.status === 200) {
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
        const time = Math.floor(Date.now() / 1000)
        const keyString = `${staticKey}${req.body.object.metadata.email}${time}`
        const k = crypto.createHash('md5').update(keyString).digest('hex')
        const password = req.body.object.metadata.id

        const emailRes = await transporter.sendMail({
          from: {
            name: 'MIP',
            address: process.env.SMTP_FROM
          },
          to: `${req.body.object.metadata.email}`,
          subject: 'Ваша ссылка для обучения', // Subject line
          text: `
        Привет ${req.body.object.metadata.name}, вот твоя ссылка для обучения. Вперед к знаниям \n
        https://lms.mip.institute/local/ilogin/rlogin.php?un=${req.body.object.metadata.email}&pw=${password}&ln=${req.body.object.metadata.surname}&fn=${req.body.object.metadata.name}&g=${req.body.object.metadata.lmsId}&e=${req.body.object.metadata.email}&t=${time}&k=${k}, \n
        Твой логин: ${req.body.object.metadata.email},
        И пароль: ${password}
        ` // plain text body
        })
      // }
      console.log('emailRes',emailRes);
      
    } else {
      console.log('denieeed')
      const res = await axios.post(
        `${routes.front.root}/api/checkout/genezisDeniedPayment`,
        req.body.object.metadata
      )
    }

    res.status(200).end()
  } catch (err) {
    console.log('v3/payments errror', err)

    res
      .status(500)
      .json({ message: 'Ошибка обработки данных', err: err?.response?.data })
  }
}

// 5555555555554477

// 5555555555554592
