import LectoriumIndexCard from '@/components/cards/LectoriumIndexCard'
import routes from '@/config/routes'
import { handleGetStaticProps } from '@/lib/index'
import Wrapper from '@/ui/Wrapper'
import { GetStaticProps } from 'next'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { NextSeo } from 'next-seo'
import stls from '@/styles/pages/LectoriumSlug.module.sass'

const LectoriumPage = ({ lectoriums }) => {
  return (
    <Wrapper>
      <NextSeo nofollow={true} noindex={true} />
      <h1>Семинары по психологии</h1>
      <div className={stls.lectoriumWrapper}>
        {lectoriums.map(lectorium => (
          <LectoriumIndexCard key={lectorium.slug} card={lectorium} />
        ))}
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.lectoriums })

export default LectoriumPage
