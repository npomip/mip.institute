import { PageFreeAcces } from '@/components/pages/PageFreeAccess'
import { GetStaticProps } from 'next'

const FreeAccesPage = () => {
  return <PageFreeAcces />
}

// export const getStaticProps: GetStaticProps = async context =>
//   await handleGetStaticProps({
//     context,
//     page: routes.front.lectoriums
//   })

export default FreeAccesPage
