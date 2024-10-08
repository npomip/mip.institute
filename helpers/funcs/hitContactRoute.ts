import { routes } from '@/config/index'
import client from '@/lib/apolloClient'
import CHECK_TOKENS from '@/lib/graphQL/CHECK_TOKENS'
import UPDATE_TOKEN from '@/lib/graphQL/UPDATE_TOKENS'
import axios from 'axios'
import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
import createOrUpdateLead from './createOtUpdateLead'

const hitContactRoute = async values => {
  try {
    values.id = uuidv4()
    await axios.post(`${routes.front.root}/api/genezis`, values)
    const { data: checkTokenData } = await client.query({
      query: CHECK_TOKENS,
      variables: { title: 'amo' },
      fetchPolicy: 'network-only'
    })

    if (values?.utm?.utm_source === 'edpartners') {
      const edPartners = await axios.post(
        `${routes.front.root}/api/edPartners`,
        values
      )

      values.edPartners = edPartners.data.success
    }

    const tokenId = checkTokenData?.amos[0]?.id
    const expireTime = checkTokenData?.amos[0]?.expired_in
    const oldAccess_token = checkTokenData?.amos[0]?.access
    const oldRefresh_token = checkTokenData?.amos[0]?.refresh
    const nowUNIXtime = dayjs().unix()
    const differenceInTime = expireTime - nowUNIXtime

    if (differenceInTime < 1800) {
      const exchangeTokensResponse = await axios.post(
        `${routes.front.root}/api/amoCRMexchangeToken`,
        checkTokenData?.amos[0]
      )
      const { data } = await client.mutate({
        mutation: UPDATE_TOKEN,
        variables: {
          input: {
            where: { id: tokenId },
            data: {
              access: exchangeTokensResponse.data.access_token,
              refresh: exchangeTokensResponse.data.refresh_token,
              expired_in: nowUNIXtime + 84400
            }
          }
        }
      })
      values.access = data.updateAmo.amo.access
      const newLead = await createOrUpdateLead(values)
      return newLead.data.status
    } else {
      values.access = oldAccess_token
      const newLead = await createOrUpdateLead(values)
      return newLead.data.status
    }
  } catch (err) {
    console.log(err)
    try {
      const res = await axios.post(`${routes.front.root}/api/contact`, values)
      return res.status
    } catch (error) {
      return error
    }
  }
}

export default hitContactRoute
