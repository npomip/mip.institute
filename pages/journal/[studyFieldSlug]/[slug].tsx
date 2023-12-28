import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { useRouter } from 'next/router'
import Wrapper from '@/components/layout/Wrapper'
import ArticlesDynamicZones from '@/components/articles/ArticlesDynamicZones'
import { Cta } from '@/components/sections'
import { BtnAlpha } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import SeminarTickets from '@/components/sections/SeminarTickets'
import ArticleTitle from '@/components/articles/ArticleTitle'
import SlugCard from '@/components/cards/SlugCard'
import ArticleRelatedBlogs from '@/components/articles/ArticleRelatedBlogs'
import ArticleAuthors from '@/components/articles/ArticleAuthors'
import SeoPagesJournal from '@/components/seo/SeoPageJournal'

const JournalSlugPage = ({ blog }) => {
  // console.log(blog)
  const articleHeading = {
    color: blog?.color,
    studyField: blog?.studyField,
    picture: blog?.picture,
    title: blog?.title,
    teacher: blog?.teacher,
    blogAuthor: blog?.blogAuthor
  }
  // const teacherAuthor = blog?.teacher
  // teacherAuthor.arg = 'Психолог'
  // const writtingAuthor = blog?.blogAuthor
  // writtingAuthor.arg = 'Автор'
  const articleAuthors = [blog?.teacher, blog?.blogAuthor]
  // console.log(articleAuthors)
  console.log('BLOG PROPS', blog)

  return (
    <Wrapper>
      <SeoPagesJournal />
      {articleHeading && <ArticleTitle props={articleHeading} />}
      <article className={stls.article}>
        {blog?.article?.map((module, idx) => (
          <ArticlesDynamicZones key={idx} props={module} />
        ))}
        {blog?.teacher && <ArticleAuthors authors={articleAuthors} />}
        {blog?.blogs.length && <ArticleRelatedBlogs blogs={blog?.blogs} />}
      </article>
      {/* <SeoPagesPrograms
        programs={programs}
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesPrograms /> */}
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.journal })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journal })

export default JournalSlugPage
