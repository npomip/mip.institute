import stls from '@/styles/components/programs/Professions.module.sass'
import CardProfession from '@/components/cards/CardProfession'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'
import { routeProfessions } from '@/data/routes'
import ProgramsQty from '@/components/general/ProgramsQty'

const Professions = ({
  biggerTitle = false,
  withBtn = false,
  professions = []
}) => {
  return (
    <div className={stls.container}>
      <hgroup>
        {biggerTitle ? (
          <div className={stls.heading}>
            <h2
              className={classNames({
                [stls.title]: true,
                [stls.bold]: true
              })}>
              Профессии
            </h2>
            <div className={stls.phonetablet}>
              <ProgramsQty qty={professions.length} ofType='profession' />
            </div>
            <div className={stls.laptopdesktop}>
              <ProgramsQty
                qty={professions.length}
                ofType='profession'
                dye='bgalpha'
              />
            </div>
          </div>
        ) : (
          <div className={stls.heading}>
            <h3 className={stls.title}>Профессии</h3>
            <div className={stls.phonetablet}>
              <ProgramsQty qty={professions.length} ofType='profession' />
            </div>
            <div className={stls.laptopdesktop}>
              <ProgramsQty
                qty={professions.length}
                ofType='profession'
                dye='bgalpha'
              />
            </div>
          </div>
        )}
        <p className={stls.subTitle}>
          Длинные программы для полного погружения в направление
        </p>
      </hgroup>
      <div className={stls.professions}>
        {professions.map((profession, idx) => (
          <CardProfession
            key={profession.title + idx}
            profession={profession}
          />
        ))}
      </div>
      {withBtn && (
        <div className={stls.btn}>
          <BtnDelta text={'Смотреть все профессии'} href={routeProfessions} />
        </div>
      )}
    </div>
  )
}

export default Professions
