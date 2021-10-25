import { backRootUrl, teachersUrl } from '@/config/index'
import { convertMdToHtml } from '@/helpers/index'

const fetchTeachers = async () => {
  const res = await fetch(`${backRootUrl}${teachersUrl}`)
  const data = await res.json()
  const teachers = convertMdToHtml({
    arr: data,
    params: ['achievements']
  })

  return teachers
}

export default fetchTeachers
