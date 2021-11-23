import { routesBack } from '@/config/index'
import axios from 'axios'

type TypeHandleGetStaticPathsPrograms = {
  type: '/course' | '/profession' | ''
}

const handleGetStaticPathsPrograms = async (
  { type = '' }: TypeHandleGetStaticPathsPrograms = { type: '' }
) => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPathsPrograms}${type}`
  )

  return {
    paths: res.data,
    fallback: 'blocking'
  }
}

export default handleGetStaticPathsPrograms
