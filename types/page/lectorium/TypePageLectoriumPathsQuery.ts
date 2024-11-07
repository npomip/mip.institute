type TypePageLectoriumPathsQuery = {
  readonly lectorium:
    | {
        studyFieldSlug: string | null
        slug: string | null
      }[]
    | null
}

export default TypePageLectoriumPathsQuery