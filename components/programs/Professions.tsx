import stls from '@/styles/components/programs/Professions.module.sass'
import { routes } from '@/config/index'
import CardProfession from '@/components/cards/CardProfession'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'
import ProgramsQty from '@/components/general/ProgramsQty'
import SearchProgram from '../general/SearchProgram'

type ProfessionsType = {
  biggerTitle?: boolean
  withBtn?: boolean
  courses: any[]
  withQty?: boolean
  threerow?: boolean
}

const Professions = ({
  biggerTitle = false,
  withBtn = false,
  professions = [],
  withQty = false,
  threerow = false
}) => {
  return (
    <div className={stls.container}>
      <div
        className={classNames({
          [stls.professions]: true,
          [stls.threerow]: threerow
        })}>
        {professions.map((profession, idx) => (
          <CardProfession
            key={profession.title + idx}
            profession={profession}
          />
        ))}
      </div>
      {withBtn && (
        <div className={stls.btn}>
          <BtnDelta
            text={'Смотреть все профессии'}
            href={routes.front.professions}
          />
        </div>
      )}
    </div>
  )
}

export default Professions
