import { backRootUrl, reviewsUrl } from '@/config/index'
import { convertMdToHtml } from '@/helpers/index'

const fetchReviews = async () => {
  const res = await fetch(`${backRootUrl}${reviewsUrl}`)
  const data = await res.json()
  // const reviews = convertMdToHtml({
  //   arr: data,
  //   params: ['achievements']
  // })
  const reviews = data

  return reviews
}

export default fetchReviews
