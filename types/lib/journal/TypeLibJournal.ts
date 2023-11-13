import { TypeLibGeneralPicture, TypeLibTeachers, TypeLibReviews } from '@/types/index'

type TypeLibJournal = {
  [x: string]: any
  id: string | null
  title?: string | null
  subtitle?: string | null
  slug?: string | null
  // studyField?: string | null
  // studyFieldSlug: string | null
  // heroPicture?: TypeLibGeneralPicture | null
  
  article?:
    | {
        title?: string | null
        content?: string | null
        image?: TypeLibGeneralPicture | null
      }[]
    | null
  // teachers?: TypeLibTeachers | null
  // index_number?: {
  //   idx?: number | null
  // } | null
  // seo?: {
  //   metaTitle?: string | null
  //   metaDescription?: string | null
  //   metaImage?: {
  //     url: string | null
  //     width: string | null
  //     height: string | null
  //     alternativeText?: string | null
  //   } | null

  //   metaSocial?: {
  //     title?: string | null
  //     description?: string | null
  //     image: {
  //       url: string | null
  //       width: string | null
  //       height: string | null
  //       alternativeText?: string | null
  //     }
  //     socialNetwork?: string | null
  //   } | null
  // } | null
} | null

export default TypeLibJournal
