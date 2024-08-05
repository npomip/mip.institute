import ArticleAuthors from '@/components/articles/ArticleAuthors'
import ArticleContentLinks from '@/components/articles/ArticleContentLinks'
import ArticleRelatedBlogs from '@/components/articles/ArticleRelatedBlogs'
import ArticleTitle from '@/components/articles/ArticleTitle'
import ArticlesDynamicZones from '@/components/articles/ArticlesDynamicZones'
import { Accordion } from '@/components/general/Accordion'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import ReadingProgressbar from '@/components/general/ReadingProgressbar'
import Wrapper from '@/components/layout/Wrapper'
import ButtonToTop from '@/components/sections/ButtonToTop'
import SeoPagesJournal from '@/components/seo/SeoPageJournal'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import apolloClient from '@/lib/apolloClient'
import TypePageJournalsPropsQuery from '@/types/page/journals/query/TypePageJournalsPropsQuery'
import { gql } from '@apollo/client'

const JournalSlugPage = ({ blog }) => {
  const articleHeading = {
    studyField: blog?.studyField,
    picture: blog?.picture,
    title: blog?.title,
    teacher: blog?.teacher,
    blogAuthor: blog?.blogAuthor,
    date: blog?.date,
    readTime: blog?.readTime
  }

  const articleAuthors = [blog?.teacher, blog?.blogAuthor]

  const headingLinks = blog?.article?.filter(
    el => el.__typename === 'ComponentBlogSubtitle'
  )

  const slug = ['', blog?.studyFieldSlug]

  const segments = ['journal', 'journal']

  const labels = ['Журнал', blog?.studyField]
  const breadcrumbs = segments.map((_, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments[index],
      slug: slug[index]
    }
    return breadcrumb
  })

  return (
    <Wrapper>
      <SeoPagesJournal blog={blog} />
      <div className={stls.in}>
        <ReadingProgressbar />
        <Breadcrumbs isJournal breadcrumbs={breadcrumbs} />
        {articleHeading && <ArticleTitle props={articleHeading} />}
        <Accordion>
          <ArticleContentLinks props={headingLinks} />
        </Accordion>
        <article className={stls.article}>
          {blog?.article?.map((module, idx) => (
            <ArticlesDynamicZones key={idx} props={module} />
          ))}
          {blog?.teacher && <ArticleAuthors authors={articleAuthors} />}
          {blog?.blogs?.length > 0 && (
            <ArticleRelatedBlogs blogs={blog?.blogs} />
          )}
          <ButtonToTop />
        </article>
      </div>
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.journal })

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context

  const blog = await handleGetStaticProps({
    context,
    page: routes.front.journal
  })

  const res = await apolloClient.query<TypePageJournalsPropsQuery>({
    query: gql`
      query GetStaticPropsPageJournal {
        blogs(sort: "date:desc") {
          id
          title
          slug
          subtitle
          studyField
          studyFieldSlug
          date
          previewOnly
          picture {
            url
            width
            height
          }
        }
      }
    `
  })
  const blogs = res?.data?.blogs as any
  const validSlug = blogs.find(el => el.slug === params.slug)

  if (!validSlug) {
    return {
      notFound: true
    }
  }

  return { props: blog }
}

export default JournalSlugPage
