import revalidate from "@/config/revalidate"
import routes from "@/config/routes"
import axios from "axios"
import qs from "qs"

// test token strapi v 5 

const queryString = qs.stringify(
  {
    populate: {
      hero: {
        populate: '*'
      },
      blocks: {
        populate: '*'
      },
    },
    // fields: ['id', 'title', 'slug', 'subtitle', 'studyField', 'studyFieldSlug', 'date', 'previewOnly']
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)
export const getStaticPropsVacancies = async () => {
try {
  const response = await axios.get(`${routes.back.rootv2}/api/vacancy?${queryString}`, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_BEARER}`, // Замените на ваш токен
    },
  })

  return {
    props: {
      vacancies: response?.data?.data || []
    },
    revalidate: revalidate.default
  }
}catch(e){
  console.log(e)}

}

