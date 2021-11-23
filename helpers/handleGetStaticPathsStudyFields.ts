import { routesBack } from '@/config/index'
import axios from 'axios'

type TypeHandleGetStaticPathsStudyFields = {
  type?: '/course' | '/profession' | ''
}

const handleGetStaticPathsStudyFields = async (
  { type = '' }: TypeHandleGetStaticPathsStudyFields = { type: '' }
) => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPathsStudyFields}${type}`
  )

  return {
    paths: res.data,
    fallback: 'blocking'
  }
}

export default handleGetStaticPathsStudyFields
