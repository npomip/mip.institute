import {
  TypeLibPrograms,
  TypeLibReviews,
  TypeLibTeachers,
  TypeLibWebinars
} from '@/types/index'

type TypeSortBasedOnNumericOrderProps = {
  programs?: TypeLibPrograms
  reviews?: TypeLibReviews
  teachers?: TypeLibTeachers
  webinars?: TypeLibWebinars
  uniqueReviews?: TypeLibReviews
  sortField?: string
  sortDirection?: string
}

const sortBasedOnNumericOrder = ({
  programs,
  reviews,
  teachers,
  webinars,
  uniqueReviews,
  sortField = 'default',
  sortDirection = 'asc'
}: TypeSortBasedOnNumericOrderProps): any => {
  const arr = programs || reviews || teachers || webinars || uniqueReviews || []

  // Сортировка по умолчанию с учетом isPopular
  if (sortField === 'default') {
    return [...arr].sort((a, b) => {
      // Программы с isPopular=true идут первыми
      // @ts-ignore
      if (a.isPopular && !b.isPopular) return -1
      // @ts-ignore
      if (!a.isPopular && b.isPopular) return 1

      // Если оба объекта имеют или не имеют isPopular, сортировка по index_number
      return (
        Number(a?.index_number?.idx || Infinity) -
        Number(b?.index_number?.idx || Infinity)
      )
    })
  }

  if (sortField === 'price') {
    return [...arr].sort((a, b) => {
      // @ts-ignore
      const priceA = (a?.price as number) ?? Infinity
      // @ts-ignore
      const priceB = (b?.price as number) ?? Infinity

      if (sortDirection === 'asc') {
        return priceA - priceB
      } else {
        return priceB - priceA
      }
    })
  }

  return arr
}
export default sortBasedOnNumericOrder
