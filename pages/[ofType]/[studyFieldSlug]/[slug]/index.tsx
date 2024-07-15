import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { revalidate, routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PageBachelor, PagesProgram } from '@/components/pages'
import { SeoPagesProgram } from '@/components/seo'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const ProfessionPage: NextPage<TypePageProgramProps> = ({
  programs,
  program,
  reviews,
  studyFieldSlug
}) => {
  useHandleContextStaticProps({
    programs,
    program,
    curProgramsType: program?.type,
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  const programOverview = program?.programOverview
  const router = useRouter()
  const segments = router.asPath
    .split('/')
    .filter(segment => segment !== '')
    .slice(0, 2)
  const label =
    program?.type === 'Profession'
      ? 'Профессиональная переподготовка'
      : program?.type === 'Course'
      ? 'Повышение квалификации'
      : program?.type === 'Practice'
      ? 'Практические навыки'
      : 'Все курсы'
  const labels = [label, program?.studyField]

  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments.slice(0, index + 1).join('/')
    }
    return breadcrumb
  })

  const slug = program?.slug

  return (
    <>
      <SeoPagesProgram
        program={program}
        ofType={program?.type}
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      {program.type === 'Bachelor' ? (
        <PageBachelor />
      ) : (
        <PagesProgram
          slug={slug}
          breadcrumbs={breadcrumbs}
          programOverview={programOverview}
          reviews={reviews}
          ofType={program.type}
        />
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const programSlug = params?.slug || null

  try {
    const res = await apolloClient.query({
      query: gql`
        query GetStaticPropsProgram($slug: String!) {
          reviews {
            id
            name
            profession
            title
            story
            createdAt
            picture {
              url
              width
              height
            }
          }

          programs {
            id
            studyField
            studyFieldSlug
          }
          program: programs(where: { slug: $slug }) {
            id
            title
            heroPicture {
              url
              width
              height
            }
            diploma1 {
              url
              width
              height
            }
            diploma2 {
              url
              width
              height
            }
            isPopular
            courseOpened
            slug
            studyForm
            type
            studyMounthsDuration
            description
            studyFormLabel
            typeLabel
            studyHours
            WhatYouWillLearn
            programOverview
            programOverviewTitle
            ForWhom
            forWhomSubtitle
            fullTitle
            shortContents
            resumeTitle
            entrySalary
            resumeSkills
            jobTitles
            qualification
            studyField
            typeFullLabel
            studyFieldSlug
            price
            discount
            questions
            qnas {
              question
              answer
            }
            unique_reviews {
              id
              name
              profession
              title
              story
              createdAt
              picture {
                url
                width
                height
              }
            }
            requests {
              title
              description
            }
            teachers {
              id
              name
              achievements
              specialization
              experience
              portrait {
                url
                width
                height
              }
              index_number {
                idx
              }
            }
            index_number {
              idx
            }
            seo {
              metaTitle
              metaDescription
              metaImage {
                url
                width
                height
                alternativeText
              }
              keywords
              metaRobots
              structuredData
              metaViewport
              canonicalURL
              isSEOFriendly
              metaSocial {
                title
                description
                image {
                  url
                  width
                  height
                  alternativeText
                }
                socialNetwork
              }
            }
          }
        }
      `,
      variables: { slug: programSlug }
    })
    const reviewsData = res?.data?.reviews || []
    return {
      props: {
        // program: res.data.program,
        program: res?.data?.program?.[0] || null,

        reviews: reviewsData
      },
      revalidate: revalidate.default
    }
  } catch (error) {
    // console.error('Ошибка запроса:', error)
    // console.error('Статус код:', error.statusCode)
    // console.error('Результат:', error.result)
    // console.log('errrrrrr', error.networkError.result)
    return error
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await apolloClient.query({
    query: gql`
      query GetStaticPathsPrograms {
        programs {
          slug
          studyFieldSlug
          type
        }
      }
    `
  })

  const paths = res.data.programs.map(program => ({
    params: {
      ofType: program.type.toLowerCase(),
      studyFieldSlug: program.studyFieldSlug,
      slug: program.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProfessionPage

// import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import { TypePageProgramProps } from '@/types/index'
// import { routes } from '@/config/index'
// import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
// import { useHandleContextStaticProps } from '@/hooks/index'
// import { PagesProgram } from '@/components/pages'
// import { SeoPagesProgram } from '@/components/seo'
// import { useRouter } from 'next/router'

// const ProfessionPage: NextPage<TypePageProgramProps> = ({
//   programs,
//   program,
//   reviews,
//   studyFieldSlug
// }) => {
//   useHandleContextStaticProps({
//     programs,
//     program,
//     curProgramsType: 'profession',
//     curProgramsStudyFieldSlug: studyFieldSlug
//   })
//   const programOverview = program?.programOverview
//   const router = useRouter()
//   const segments = router.asPath.split("/").filter(segment => segment !== "").slice(0,2);
//   const labels =['Профессиональная переподготовка', program?.studyField]

//   const breadcrumbs = segments.map((segment, index) => {
//   const breadcrumb = {
//     label: labels[index],
//     path: "/" + segments.slice(0, index + 1).join("/")
//   };
//   return breadcrumb;
// });

// const slug = program?.slug

//   return (
//     <>
//       <SeoPagesProgram
//         program={program}
//         ofType='profession'
//         curProgramsStudyFieldSlug={studyFieldSlug}
//       />
//       <PagesProgram slug={slug} breadcrumbs={breadcrumbs} programOverview={programOverview} reviews={reviews} ofType={'profession'} />
//     </>
//   )
// }

// export const getStaticPaths: GetStaticPaths = async () =>
//   await handleGetStaticPaths({ page: routes.front.program, type: 'Profession' })

// export const getStaticProps: GetStaticProps = async context =>
//   await handleGetStaticProps({
//     context,
//     page: routes.front.program,
//     type: 'Profession'
//   })

// export default ProfessionPage
