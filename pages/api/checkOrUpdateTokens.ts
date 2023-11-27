import CHECK_TOKENS from "@/components/funcs/CHECK_TOKENS";
import routes from "@/config/routes";
import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import axios from "axios";
import moment from "moment";

const UPDATE_TOKEN = gql`
  mutation UpdateTokens($input: updateAmoInput!) {
    updateAmo(input: $input) {
      amo {
        id
        access
        refresh
        expired_in
      }
    }
  }
`

const checkOrUpdateTokens = async () => {
  // const { data: checkTokenData } = await client.query({
  //   query: CHECK_TOKENS,
  //   variables: { title: 'amo' },
  //   fetchPolicy: 'network-only'
  // });
  
  // if(dif_time < 1800){
  //   update_token
  //   return new_token
  // } else {
  //   return old_token
  // }
  try {
    const { data: checkTokenData } = await client.query({
      query: CHECK_TOKENS,
      variables: { title: 'amo' },
      fetchPolicy: 'network-only'
    });

    const tokenId = checkTokenData?.amos[0]?.id
    const expireTime = checkTokenData?.amos[0]?.expired_in;
    const oldAccess_token = checkTokenData?.amos[0]?.access
    const oldRefresh_token = checkTokenData?.amos[0]?.refresh
    const nowUNIXtime = moment().unix()
    const differenceInTime = expireTime - nowUNIXtime
    // console.log(expireTime, nowUNIXtime)
    if (differenceInTime < 1800) {
      // const exchangeTokensResponse = await axios.post(
      //   `${routes.front.root}/api/amoCRMexchangeToken`,
      //   checkTokenData?.amos[0]
      // )
      // const { data } = await client.mutate({
      //   mutation: UPDATE_TOKEN,
      //   variables: {
      //     input: {
      //       where: { id: tokenId },
      //       data: {
      //         access: exchangeTokensResponse.data.access_token,
      //         refresh: exchangeTokensResponse.data.refresh_token,
      //         expired_in: nowUNIXtime + 84400
      //       }
      //     }
      //   },
      // })

      // return data.updateAmo.amo.access
      return {data: 'newwwww'}
    } else {
      // return oldAccess_token
      return {data: oldAccess_token}
    }
  } catch (error) {
    
  }
}

export default checkOrUpdateTokens