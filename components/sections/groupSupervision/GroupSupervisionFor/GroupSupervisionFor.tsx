import stls from './GroupSupervisionFor.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
// import desc1 from '@/public/assets/imgs/groupSupervision/Desc/desc1.png'
// import desc2 from '@/public/assets/imgs/groupSupervision/Desc/desc2.png'
// import desc3 from '@/public/assets/imgs/groupSupervision/Desc/desc3.png'
// import desc4 from '@/public/assets/imgs/groupSupervision/Desc/desc4.png'
// import desc5 from '@/public/assets/imgs/groupSupervision/Desc/desc5.png'
import background from '@/public/assets/imgs/groupSupervision/For/backgroundFor.png'
import Image from 'next/image'
import supervisionFor from '@/public/assets/imgs/groupSupervision/For/supervisionFor.png'

const GroupSupervisionFor = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <div className={stls.columns}>
        <div className={classNames(stls.imageBlock, stls.column)}>
          <Image
            src={supervisionFor.src}
            fill
            alt='Супервизия'
            className={stls.image}
          />
        </div>
        <div
          className={classNames(stls.textBlock, stls.column)}
          style={{
            backgroundImage: `url(${background.src})`,
            objectFit: 'cover',
            backgroundSize: `${isMobileAndTabletLayout ? '600px' : '1000px'}`,
            backgroundPosition: 'center'
          }}>
          <h2 className={stls.title}>Для чего психологу супервизия</h2>
          <p className={stls.text}>
            <span className={stls.bold}>
              Вы познакомитесь с основными теоретическими понятиями, принципами
              и направлениями
            </span>{' '}
            (названия дисциплины), научитесь применять основные методики и
            приёмы (название дисциплины) в практической работе психолога,{' '}
            <span className={stls.bold}>
              научитесь создавать и адаптировать
            </span>{' '}
            программы работы с клиентом с учётом знаний в области (название
            дисциплины).
          </p>
        </div>
      </div>
    </section>
  )
}

export default GroupSupervisionFor
