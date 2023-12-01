type TypePageSeminarPathsQuery = {
  readonly seminars:
    | {
        studyFieldSlug: string | null
        slug: string | null
      }[]
    | null
}

export default TypePageSeminarPathsQuery