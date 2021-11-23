import { routesBack, webinarsUrl } from '@/config/index'
import { convertMdToHtml } from '@/helpers/index'

const fetchWebinars = async () => {
  const res = await fetch(`${routesBack.root}${routesBack.webinars}`)
  const data = await res.json()
  // const webinars = convertMdToHtml({
  //   arr: data,
  //   params: ['achievements']
  // })
  const webinars = data

  return webinars
}

export default fetchWebinars
