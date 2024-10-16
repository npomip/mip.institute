import Wrapper from '@/ui/Wrapper'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { NextSeo } from 'next-seo'
import 'reactjs-popup/dist/index.css'

const LectoriumPage = () => {
  return (
    <Wrapper>
      <NextSeo nofollow={true} noindex={true} />
    </Wrapper>
  )
}

export default LectoriumPage
