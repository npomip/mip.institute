import stls from '@/components/sections/groupSupervision/Supervisors/Supervisors.module.sass'
import supervisors from 'constants/GroupSupervision/supervisors'
import { CldImage } from 'next-cloudinary'

const Supervisors = () => {
  const card = (supervisor: (typeof supervisors)[number]) => (
    <li className={stls.supervisor} key={supervisor.name}>
      <div className={stls.imageWrapper}>
        <CldImage
          className={stls.image}
          src={supervisor.image}
          alt={supervisor.name}
          width={350}
          height={400}
          style={{ width: '100%' }}
        />
      </div>
      <p className={stls.name}>{supervisor.name}</p>
      <span className={stls.position}>{supervisor.position}</span>
    </li>
  )

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Супервизоры</h2>
      <ul className={stls.list}>
        {supervisors.map(supervisor => card(supervisor))}
        <li className={stls.emptyli}>
          <CldImage
            className={stls.empty}
            alt='lalal'
            src={'Group_1321315087_7a7fc95bed'}
            width={370}
            height={680}
          />
        </li>
        <li className={stls.emptyli}>
          <CldImage
            className={stls.empty}
            alt='lalal'
            src={'Group_1321315087_7a7fc95bed'}
            width={370}
            height={680}
          />
        </li>
      </ul>
    </section>
  )
}

export default Supervisors
