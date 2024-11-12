import revalidate from "@/config/revalidate";
import routes from "@/config/routes";
import axios from "axios"
import qs from "qs"

export const getStaticPropsBlog = async ({context}) => {

  const queryString = qs.stringify(
    {
      filters: {
        slug: context?.params?.slug?.toString(),
      },
      populate: {
        picture: {
          fields: ['url', 'width', 'height']
        },
        article: {
          populate: '*'
        }
      }
    },
  )

try {
  const response= await axios.get(`${routes.back.rootv2}/api/blogs?${queryString}`, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_BEARER}`, // Замените на ваш токен
    },
  })

  const blog = response?.data?.data[0] || null

  return {
    props: {
      blog,
    },
    revalidate: revalidate.default,
  }
}catch(e){
  console.log(e)}

}