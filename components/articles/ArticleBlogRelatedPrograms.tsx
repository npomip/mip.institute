import ArticleBlogOneProgram from './ArticleBlogOneProgram'
import ArticleBlogMoreThenOneProgram from './ArticleBlogMoreThenOneProgram'

export type ArticleBlogRelatedProgramsType = {
  props: {
    title: string
    programs: {
      id: string
      url: string
      title: string

      heroPicture: {
        height: string
        url: string
        width: string
      }
    }[]
  }
}

const ArticleBlogRelatedPrograms = ({
  props
}: ArticleBlogRelatedProgramsType) => {
  const programs = props?.programs

  return (
    <>
      {programs.length === 1 ? (
        <ArticleBlogOneProgram props={props} />
      ) : (
        <ArticleBlogMoreThenOneProgram props={props} />
      )}
    </>
  )
}

export default ArticleBlogRelatedPrograms
