import { BtnDelta } from '@/components/btns'
import CardProfession from '@/components/cards/CardProfession'
import { routes } from '@/config/index'
import { useFilteredItems } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/programs/Professions.module.sass'
import classNames from 'classnames'

type ProfessionsType = {
  biggerTitle?: boolean
  withBtn?: boolean
  withQty?: boolean
  threerow?: boolean
}

const Professions = ({
  withBtn = false,
  threerow = false
}: ProfessionsType) => {
  const filteredItems = useFilteredItems()

  return (
    <div className={stls.container}>
      <div
        className={classNames({
          [stls.professions]: true,
          [stls.threerow]: threerow
        })}>
        {filteredItems?.map((profession, idx) => (
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
