import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/Seminars.module.sass'
import { useContext } from 'react'

const SeminarTickets = () => {
  const { seminar } = useContext(ContextStaticProps)
  return (
    <>
      <div className={stls.seminarsContainer}>
        <p>осталось билетов: {seminar?.tickets_quantity}</p>
      </div>
    </>
  )
}

export default SeminarTickets
