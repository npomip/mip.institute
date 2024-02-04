import { GetStaticPaths, GetStaticProps } from 'next'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import Wrapper from '@/components/layout/Wrapper'
import ArticlesDynamicZones from '@/components/articles/ArticlesDynamicZones'
import ArticleTitle from '@/components/articles/ArticleTitle'
import ArticleRelatedBlogs from '@/components/articles/ArticleRelatedBlogs'
import ArticleAuthors from '@/components/articles/ArticleAuthors'
import SeoPagesJournal from '@/components/seo/SeoPageJournal'
import ArticleContentLinks from '@/components/articles/ArticleContentLinks'
import { Accordion } from '@/components/general/Accordion'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import { useRouter } from 'next/router'

const JournalSlugPage = ({ blog }) => {
  const articleHeading = {
    color: blog?.color,
    studyField: blog?.studyField,
    picture: blog?.picture,
    title: blog?.title,
    teacher: blog?.teacher,
    blogAuthor: blog?.blogAuthor,
    date: blog?.date
  }

  console.log(blog)

  const articleAuthors = [blog?.teacher, blog?.blogAuthor]

  const headingLinks = blog?.article?.filter(
    el => el.__typename === 'ComponentBlogSubtitle'
  )

  const router = useRouter()
  const segments = router.asPath.split('/').filter(segment => segment !== '')

  const labels = ['Журнал', blog?.title]
  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments.slice(0, index + 1).join('/')
    }
    return breadcrumb
  })

  return (
    <Wrapper>
      <SeoPagesJournal blog={blog} />
      <div className={stls.in}>
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
          {blog?.blogs.length && <ArticleRelatedBlogs blogs={blog?.blogs} />}
        </article>
      </div>
      {/* <SeoPagesPrograms
        programs={programs}
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesPrograms /> */}
      {/* <a id='a'>asdasda</a> */}
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.journal })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journal })

export default JournalSlugPage
