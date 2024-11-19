import stls from '@/styles/components/sections/groupSupervision/Roles/RolesDescription.module.sass'
import Image, { StaticImageData } from 'next/image'

type Props = {
  role: {
    title: string
    subtitle: string
    image: StaticImageData
    text: string[]
  }
}

const RolesDescription = ({ role }: Props) => {
  return (
    <div className={stls.container}>
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
        <Image
          src={role.image}
          alt={role.title}
          layout='fill'
          className={stls.image}
        />
      </div>
    </div>
  )
}

export default RolesDescription
