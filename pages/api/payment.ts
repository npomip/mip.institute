import routes from '@/config/routes'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

export type TypeNextApiResponseLeadData = {
	readonly err?: unknown
	readonly msg: string
	readonly url?: string
	readonly status: number
	readonly transactionId?: number | string
}

const shopId = '403833'
const secretKey = 'test_9z6Pyfo60K9hu1J5GxKoJ5xQUUo2QWUzk09JlNLq7JE'

// const shopId = dev
// 	? process.env.YOOKASSA_SHOP_ID_DEV
// 	: process.env.YOOKASSA_SHOP_ID_PROD
// const secretKey = dev
// 	? process.env.YOOKASSA_SECRET_KEY_DEV
// 	: process.env.YOOKASSA_SECRET_KEY_PROD

const idempotenceKey = uuidv4()

const payment = async (
	req: NextApiRequest,
	res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	const { price, returnURL, values } = req.body

	console.log('idempotenceKey ===', idempotenceKey);
	

	const requestData = {
		amount: {
			value: `1.00`,
			currency: 'RUB'
		},
		confirmation: {
			type: 'redirect',
			return_url: `${routes.front.home}`
		},
		metadata: {
			name: "Ivan",
			surname: 'Kolpakov',
			phone: '89817954346',
			email: 'i_kolpakov@mip.institute',
			id: '87'
		},
		receipt: {
			customer: {
				full_name: "Ivan",
				phone: '89817954346',
				email: 'i_kolpakov@mip.institute'
			},
			items: [
				{
					description: `Программа `,
					quantity: '1.00',
					amount: {
						value: `1.00`,
						currency: 'RUB'
					},
					vat_code: '2',
					payment_mode: 'full_prepayment',
					payment_subject: 'commodity'
				}
			]
		}
	}

	try {
		const response = await axios.post(
			'https://api.yookassa.ru/v3/payments',
			requestData,
			{
				auth: {
					username: shopId,
					password: secretKey
				},
				headers: {
					'Idempotence-Key': idempotenceKey,
					'Content-Type': 'application/json'
				}
			}
		)
		// values.paymentStatus = 'В обработке'
		// await axios.post(`${routesFront.root}/api/contact`, values)

		res.status(200).json({
			status: 200,
			msg: 'URL returned successfully',
			url: response.data.confirmation.confirmation_url,
			transactionId: response.data.id
		})
	} catch (err) {
		res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
		console.error(err)
	}
}

export default payment