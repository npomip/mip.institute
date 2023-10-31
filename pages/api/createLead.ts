import axios from 'axios'

const createLead = async (req, res) => {
  const { name, phone, price, email, promo, access, leadPage, ymUid } = req.body;
  console.log('in createLead', phone)

  // Замените на ваш access_token
  // const accessToken =
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE2ZTMxZTZhNzg2YTgwZjUyZTAyOWNkMWI4MDg2YTE5YzBmMDcyMTI3M2UxZDcxYjY1YWI0MmM0OTdmZjZhYzg4ZmM0OWYxODE3NTRiMjM2In0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiIxNmUzMWU2YTc4NmE4MGY1MmUwMjljZDFiODA4NmExOWMwZjA3MjEyNzNlMWQ3MWI2NWFiNDJjNDk3ZmY2YWM4OGZjNDlmMTgxNzU0YjIzNiIsImlhdCI6MTY5ODU5MzMyMiwibmJmIjoxNjk4NTkzMzIyLCJleHAiOjE2OTg2Nzk3MjIsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.QP5jroQh_WegYwYLB1p7ELwStNsjrYhssHeLH_RgcwDgWQnuHxQS8hlxanG4rmuHEIPLu2jKXT1cFOFxHrIUgnKUS3a_80oSvftRyrRgN9UjpHu1zOo3w6_RxbaYtxAWau-2e-LW_vnuSq1p9WoG38uHViROQlM0R6p7enTR8uctAW0Y7z52_mC8ReobSKSANWioAivgVKOLaYOtTFK8a-mEuzXw9SArFqq56lOTyeEABBAXBmoVKFerHKtetEDzEHQHvlBASrDVv5Gr2TENBa_oJgiLspiLkf7rNTbQoL0qQlGvB9oF0mDRIOt4b1nlh4353TyfkqoX3sYgB4Q4DQ'

  // URL для запроса сделки по ID
  const apiUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/complex`
  try {

    const leadsData = [
      {
        name: 'Новая заявка с Forms',
        // price: price,
        custom_fields_values: [
          {
            field_id: 705109,
            values: [
              {
                value: promo
              }
            ]
          },
          {
            field_id: 1050833,
            values: [
              {
                value: 'Main'
              }
            ]
          },
          {
            field_id: 1043325,
            values: [
              {
                value: 'check_utm'
              }
            ]
          },
        ],
        _embedded: {
          tags: [
            {
              // id:null,
              id: 127251
            }
          ],
          contacts: [
            {
              name: name,
              custom_fields_values: [
                {
                  field_code: 'PHONE',
                  values: [
                    {
                      enum_code: 'MOB',
                      value: phone
                    }
                  ]
                },
                {
                  field_code: 'EMAIL',
                  values: [
                    {
                      enum_code: 'PRIV',
                      value: email
                    }
                  ]
                },
              ]
            }
          ]
        }
      }
    ]

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(apiUrl, leadsData, {
      headers: {
        Authorization: `Bearer ${access}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      const leadData = response.data
      console.log(response.status)
      res.status(200).json({ status: 200, msg: 'Lead created' })
    } else {
      console.log(response.data.error)
      res.status(response.status).json({ status: 500, msg: 'Unexpected server error' })
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error)
    res.status(500).json({ error: error })
  }
}

export default createLead