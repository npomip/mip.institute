import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  const staticKey = '3ykOQzkL2X647dWw8dDx7h5c';

  try {
    const payment_id = req.body.object.id
    console.log('payment_id=====', req.body)

    const generatePswrd = uuidv4()
    const time = Math.floor(Date.now() / 1000);

    console.log();
    



    // Описание параметров:
    // un=Имя пользователя *
    // pw=Пароль *
    // ln=Фамилия *
    // fn=Имя *
    // mn=Отчество *
    // e=email *
    // g=название группы в которую нужно зачислить слушателя, если группы нет в системе она будет создана.
    // t=время отправки запроса в формате unixtime (не может отличаться более чем на минуту от времени на сервере)
    // k=разовый ключ, который должын быть свормирован как md5($kk.$un.$t), где $kk статический ключ равный 3ykOQzkL2X647dWw8dDx7h5c, $un - имя пользователя, $t - время отправки запроса.

    // https://lms.mip.institute/local/ilogin/rlogin.php?un=Иван&pw=bcbc1aa1-e162-42e1-b6ce-9c5bcd285ea5&ln=Kolpakov&fn=Ivan&g=87&e=vanjaklp@yandex.ru&t=1722432676&k=5effc26772817aeba1642a051fbb5cde,

    // https://lms.mip.institute/local/ilogin/rlogin.php?un=test55&pw=1a2v3b4n5m6g7&ln=Фамилия1&fn=Имя1&mn=Отчество1&g=Тест11&e=test55@lms.org.ru&t=1720742814&k=17e02dd05ce7daa1c1677e7cec93c632

    // При этом он будет создан в системе, назначен на заданную группу и авторизирован

    // в параметре g название группы, если эта группа существует в системе и к ней привязан план/курс, то студент назначиться на них

    // отмеченный * поля обязательны для заполнения профиля, t и k для авторизации запроса

    const shopId = '403833'
    const secretKey = 'test_9z6Pyfo60K9hu1J5GxKoJ5xQUUo2QWUzk09JlNLq7JE'

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
    const emailRes = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: `${response.data.metadata.email}`,
      subject: 'Ваша ссылка', // Subject line
      text: `
      https://lms.mip.institute/local/ilogin/rlogin.php?un=${response.data.metadata.email}&pw=${generatePswrd}&ln=${response.data.metadata.surname}&fn=${response.data.metadata.name}&g=87&e=${response.data.metadata.email}&t=${time}&k=${k}, \n
      ${response.data.metadata.name}, \n
      ${response.data.metadata.phone},
      ${response.data.metadata.email},
      Pawd: ${generatePswrd}
      Kulkov,
      ` // plain text body
      // html
    })

    res.status(200).end()
  } catch (err) {
    console.log('v3/payments errror', err.response.data)

    res
      .status(500)
      .json({ message: 'Ошибка обработки данных', err: err?.response?.data })
  }
}

// 5555555555554477
