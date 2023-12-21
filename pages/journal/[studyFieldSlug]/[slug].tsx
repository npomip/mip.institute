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

const JournalSlugPage = (
  { blog }
) => {
// console.log('BLOG PROPS',blog)
  // useHandleContextStaticProps({
  //   blogs
  // })
// const title = blogs[0].title
// const text = blogs[0].text

  // const router = useRouter();
  // const {slug, studyFieldSlug} = router.query
  // const date = new Date(blogs?.date)
  // console.log('Jouranl PAge',blog.article)

  return (
    <Wrapper>
    <article className={stls.article}>
    {blog?.article?.map((module, idx) => (
      <ArticlesDynamicZones key={idx} props={module} />
    ))}
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