import DownloadProgram from '@/components/sections/lectorium/DownloadProgram'
import { NextSeo } from 'next-seo'

const LectoriumPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <DownloadProgram />
    </>
  )
}

export default LectoriumPage
