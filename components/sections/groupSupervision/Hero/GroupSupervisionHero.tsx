import stls from '@/styles/components/sections/groupSupervision/Hero/GroupSupervisionHero.module.sass'
import Image from 'next/image'
import heroMob from '@/public/assets/imgs/groupSupervision/groupSupervisionMobile.jpeg'
import hero from '@/public/assets/imgs/groupSupervision/groupSupervision.png'
import PopupTrigger from '@/ui/PopupTrigger'
import GroupSupervisionHeroInfo from '@/components/sections/groupSupervision/Hero/GroupSupervisionHeroInfo'

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
            layout='responsive'
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
