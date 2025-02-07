import PageIncomers from '@/components/pages/PageIncomers'
import { getStaticPropsIncomers } from '@/lib/handlers/getStaticPropsIncomers'
import { GetStaticProps } from 'next'

const IncomersIndexPage = ({ incomers }) => {
  console.log('AAAAAA',incomers);
  
  return <PageIncomers incomers={incomers} />
}

export const getStaticProps: GetStaticProps = async () => await getStaticPropsIncomers()
export default IncomersIndexPage
