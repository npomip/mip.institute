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
}

// TODO: figure out better types
const sortBasedOnNumericOrder = ({
  programs,
  reviews,
  teachers,
  webinars
}: TypeSortBasedOnNumericOrderProps): any => {
  const arr = programs || reviews || teachers || webinars || []

  return [...arr].sort(
    (a, b) =>
      Number(a?.index_number?.idx || Infinity) -
      Number(b?.index_number?.idx || Infinity)
  )
}

export default sortBasedOnNumericOrder
