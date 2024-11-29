import stls from '@/components/sections/groupSupervision/Hero/GroupSupervisionHero/GroupSupervisionHero.module.sass'
import Image from 'next/image'
import heroMob from '@/public/assets/imgs/groupSupervision/Hero/groupSupervisionMobile.jpeg'
import hero from '@/public/assets/imgs/groupSupervision/Hero/groupSupervision.png'
import PopupTrigger from '@/ui/PopupTrigger'
import GroupSupervisionHeroInfo from '@/components/sections/groupSupervision/Hero/GroupSupervisionHeroInfo/GroupSupervisionHeroInfo'

const GroupSupervisionHero = () => {
  return (
    <section className={stls.container}>
      <h1 className={stls.title}>Групповая супервизия</h1>
      <div className={stls.imageBlock}>
        <picture>
          <source srcSet={heroMob.src} media='(max-width: 768px)' />
          <source srcSet={hero.src} media='(min-width: 769px)' />
          <Image
            src={hero}
            alt='Групповая супервизия'
            className={stls.image}
            style={{ width: '100%', height: 'auto' }}
          />
        </picture>
        <GroupSupervisionHeroInfo />
      </div>
      <div className={stls.btn}>
        <PopupTrigger btn='alpha' cta='signUp' />
      </div>
    </section>
  )
}

export default GroupSupervisionHero
