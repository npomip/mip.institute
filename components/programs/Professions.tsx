import stls from '@/styles/components/programs/Professions.module.sass'
import CardProfession from '@/components/cards/CardProfession'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'
import { routeProfessions } from '@/data/routes'

const Professions = ({
  biggerTitle = false,
  withBtn = false,
  professions = []
}) => {
  return (
    <div className={stls.container}>
      <hgroup>
        {biggerTitle ? (
          <h2
            className={classNames({
              [stls.title]: true,
              [stls.bold]: true
            })}>
            Профессии
          </h2>
        ) : (
          <h3 className={stls.title}>Профессии</h3>
        )}
        <p className={stls.subTitle}>
          Полные программы, диплом которых считаются альтернативой второму
          высшему
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
