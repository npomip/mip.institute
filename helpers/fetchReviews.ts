import { routesBack } from '@/config/index'
import { convertMdToHtml } from '@/helpers/index'

const fetchReviews = async () => {
  const res = await fetch(`${routesBack.root}${routesBack.reviews}`)
  const data = await res.json()
  // const reviews = convertMdToHtml({
  //   arr: data,
  //   params: ['achievements']
  // })
  const reviews = data

  return reviews
}

export default fetchReviews
