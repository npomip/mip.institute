import stls from '@/styles/components/programs/Professions.module.sass'
import { routes } from '@/config/index'
import CardProfession from '@/components/cards/CardProfession'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'
import ProgramsQty from '@/components/general/ProgramsQty'

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
      {biggerTitle ? (
        <p className={stls.heading}>
          <h2
            className={classNames({
              [stls.title]: true,
              [stls.bold]: true
            })}>
            Профессии
          </h2>
          {withQty && (
            <p className={stls.phonetablet}>
              <ProgramsQty qty={professions.length} ofType='profession' />
            </p>
          )}
        </p>
      ) : (
        <p className={stls.heading}>
          <h3 className={stls.title}>Профессии</h3>
          {withQty && (
            <p className={stls.phonetablet}>
              <ProgramsQty qty={professions.length} ofType='profession' />
            </p>
          )}
        </p>
      )}
      <p className={stls.underheading}>
        <p className={stls.subTitle}>
          Программы профессиональной переподготовки для полного погружения в
          профессию
        </p>
        {withQty && (
          <p className={stls.laptopdesktop}>
            <ProgramsQty
              qty={professions.length}
              ofType='profession'
              dye='bgalpha'
            />
          </p>
        )}
      </p>
      <div
        className={classNames({
          [stls.professions]: true,
          [stls.threerow]: threerow
        })}>
        {professions.map((profession, idx) => (
          <CardProfession
            key={profession.title + idx}
            profession={profession}
            threerow={threerow}
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
