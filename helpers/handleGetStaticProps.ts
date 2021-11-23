import axios from 'axios'
import { routesBack, revalidate } from '@/config/index'

type TypeHandleGetStaticProps = {
  page:
    | '/about'
    | '/contact'
    | '/index'
    | '/legal'
    | '/payment'
    | '/reviews'
    | '/teachers'
    | '/webinars'
    | '/programs'
  studyFieldSlug?: string
  slug?: string
}

const handleGetStaticProps = async ({
  page,
  studyFieldSlug = null,
  slug = null
}: TypeHandleGetStaticProps) => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticProps}${page}`
  )

  return {
    props: { ...res.data, studyFieldSlug },
    revalidate: revalidate.default
  }
}

export default handleGetStaticProps
