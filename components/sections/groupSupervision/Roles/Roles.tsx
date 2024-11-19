import stls from '@/styles/components/sections/groupSupervision/Roles/Roles.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import RolesDescription from '@/components/sections/groupSupervision/Roles/RolesDescription'
import { rolesDescription } from 'constants/GroupSupervision/roles'

const Roles = () => {
  const [activeBtn, setActiveBtn] = useState(0)

  return (
    <section className={stls.container}>
      <div>
        <h2 className={stls.title}>
          <span className={stls.coloredTitle}>Роли </span>
          участников
        </h2>
        {rolesDescription.map((btn, idx) => (
          <button
            className={classNames(stls.btn, {
              [stls.active]: idx === activeBtn
            })}
            onClick={() => setActiveBtn(idx)}
            key={btn.title}
            aria-pressed={idx === activeBtn}>
            {btn.title}
          </button>
        ))}
      </div>

      <div>
        <p className={stls.text}>
          <span className={stls.bold}>
            Супервизия является неотъемлемой частью профессионального развития
            психолога.&nbsp;
          </span>
          В игровом формате отрабатываются кейсы из реальной практики.
          Супервизия предусматривает роли:{' '}
          <span className={stls.bold}>протагонист, клиент, наблюдатель.</span>
          Участники могут меняться ролями после завершения сессии.
        </p>

        <RolesDescription role={rolesDescription[activeBtn]} />
      </div>
    </section>
  )
}

export default Roles
