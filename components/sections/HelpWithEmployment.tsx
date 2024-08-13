import stls from '@/styles/components/sections/HelpWithEmployment.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import CorporateClients from '@/components/general/CorporateClients'
import { IconCircleCheck } from '@/components/icons'
import list from 'constants/helpWithEmployment'

const HelpWithEmployment = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Помощь в трудоустройстве{' '}
          <span className={stls.titleDesktop}>и поиске клиентов</span>
        </h2>
        <ul className={stls.list}>
          {list.map((measure, idx) => (
            <li key={measure + idx} className={stls.item}>
              <IconCircleCheck calpha />
              <span className={stls.text}>{measure}</span>
            </li>
          ))}
        </ul>
        <CorporateClients />
      </Wrapper>
    </section>
  )
}

export default HelpWithEmployment
