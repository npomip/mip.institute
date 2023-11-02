import routes from '@/config/routes';
import axios from 'axios'

const createLead = async (req, res) => {
  const { name, phone, price, email, promo, access, leadPage, ymUid, utm, blockForAmo } = req.body;
  console.log('in createLead', utm)

  // URL для запроса сделки по ID
  const apiUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/complex`
  try {

    const leadsData = [
      {
        name: 'Новая заявка с Forms',
        // price: price,
        custom_fields_values: [
          {
            // Промокод
            field_id: 705109,
            values: [
              {
                value: promo || null
              }
            ]
          },
          {
            // раздел сайта
            field_id: 1050833,
            values: [
              {
                value: blockForAmo || null
              }
            ]
          },
          {
          // конкретная программа из списка
            field_id: 704681,
            values: [
              {
                // enum_id: 427011
              }
            ]
          },
          {
            // источник рекламы(utm_source)
            field_id: 705917,
            values: [
              {
                value: utm?.utm_source || null
              }
            ]
          },
          {
            // тип трафика (utm_medium)
            field_id: 705919,
            values: [
              {
                value: utm?.utm_medium || null
              }
            ]
          },
          {
            // название рекламной компании (utm_campaign)
            field_id: 705921,
            values: [
              {
                value: utm?.utm_campaign || null
              }
            ]
          },
          {
            // Баннер (utm_content)
            field_id: 705925,
            values: [
              {
                value: utm?.utm_content || null
              }
            ]
          },
          {
            // ключевое слово (utm_term)
            field_id: 705927,
            values: [
              {
                value: utm?.utm_term || null
              }
            ]
          },
          {
            // страница на которой оставлена заявка
            field_id: 997743,
            values: [
              {
                value: `${routes.front.root}${leadPage}` || null
              }
            ]
          },
          {
            // Calltouch click_id
            field_id: 1045313,
            values: [
              {
                value: utm.cl_uid || null
              }
            ]
          },
          {
            field_id: 705913,
            values: [
              {
                value: ymUid || null
              }
            ]
          },
          // {
          //   field_id: 1043321,
          //   values: [
          //     {
          //       value: 'camp'
          //     }
          //   ]
          // },
          // {
          //   field_id: 1043321,
          //   values: [
          //     {
          //       value: 'camp'
          //     }
          //   ]
          // },
          // {
          //   field_id: 1043325,
          //   values: [
          //     {
          //       value: 'check_utm'
          //     }
          //   ]
          // },

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