import axios from 'axios'
import { routesBack, revalidate } from '@/config/index'

const handleGetStaticProps = async ({ query }) => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticProps}/${query}`
  )

  const props = res.data

  return {
    props,
    revalidate: revalidate.default
  }
}

export default handleGetStaticProps
