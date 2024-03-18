import stls from '@/styles/components/sections/RequestsYouWillFace.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import RequestsYouWillFace from './RequestsYouWillFace'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'


const RequestsCard = () => {
  
  const {  program } = useContext(ContextStaticProps)
  
  const requests = program?.requests
  return (
    <>
    {requests?.length > 0  && (
      <section className={stls.section}>
      <Wrapper>
        <h2 className={stls.title}>По итогу курса Вы будете работать с запросами:</h2>
      <div className={stls.cardList}>
      {requests.map((request, index) => (
        <RequestsYouWillFace key={index} title={request.title} description={request.description} index={index} />
      ))}
    </div>
      </Wrapper>
    </section>
    )}
    </>
  )
}

export default RequestsCard
