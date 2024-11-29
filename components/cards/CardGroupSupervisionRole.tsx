import stls from '@/styles/components/cards/CardGroupSupervisionRole.module.sass'
import Image, { StaticImageData } from 'next/image'
import background from '@/public/assets/imgs/groupSupervision/Roles/background.png'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

type Props = {
  role: {
    title: string
    subtitle: string
    image: StaticImageData
    text: string[]
  }
}
const CardGroupSupervisionRole = ({ role }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const position = isMobileAndTabletLayout ? '43% 209%' : '50% 43%'
  return (
    <div
      className={stls.container}
      style={{
        backgroundImage: `url(${background.src})`,
        objectFit: 'cover',
        backgroundSize: `${isMobileAndTabletLayout ? '1200px' : '1300px'}`,
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat'
      }}>
      <div>
        <p className={stls.title}>{role.title}</p>
        <span className={stls.subtitle}>{role.subtitle}</span>
        <ol className={stls.list}>
          {role.text.map(item => (
            <li className={stls.item} key={item}>
              {item}
            </li>
          ))}
        </ol>
      </div>

      <div className={stls.imageWrapper}>
        <Image src={role.image} alt={role.title} fill className={stls.image} />
      </div>
    </div>
  )
}

export default CardGroupSupervisionRole
