import revalidate from "@/config/revalidate"
import routes from "@/config/routes"
import axios from "axios"
import qs from "qs"

// test token strapi v 5 

const queryString = qs.stringify(
  {
    fields: [ 'slug', 'studyField',]
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)
export const getStaticPathsBlogs = async () => {
try {
  const response = await axios.get(`${routes.back.rootv2}/api/blogs?${queryString}`, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_BEARER}`, // Замените на ваш токен
    },
  })

  return {
    paths: Array.from(
      new Set(
        response.data?.data?.map(program => ({
          params: {
            // studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { slug: 'program' } }],
    fallback: 'blocking'
  }
}catch(e){
  console.log(e.request.data)}

}