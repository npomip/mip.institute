import stls from '@/styles/components/cards/CardTeacher.module.sass'
import IconPortalViolet from '../icons/IconPortalViolet'
import classNames from 'classnames'

type Props = {
  portrait: JSX.Element
  name: string
  achievements: string
  experience?: string
  isExperienceHidden?: boolean
  isWhiteBackground?: boolean
}

const CardTeacher = ({
  portrait,
  name,
  achievements,
  experience,
  isExperienceHidden = false,
  isWhiteBackground = false
}: Props) => {
  return (
    <article className={stls.container}>
      <div
        className={classNames({
          [stls.innerContainer]: true,
          [stls.practicalTeacher]: isWhiteBackground
        })}>
        <div className={stls.twoColumns}>
          <div className={stls.leftBlock}>
            <div className={stls.portrait}>{portrait}</div>
            <p className={stls.name}>{name}</p>
          </div>
          <div
            className={classNames({
              [stls.rightBlock]: true,
              [stls.whiteBg]: isWhiteBackground
            })}>
            <ul className={stls.achievements}>
              {achievements
                .trim()
                .split('\n')
                .map((el, i) => (
                  <li key={el + i}>{el}</li>
                ))}
            </ul>
            {experience && !isExperienceHidden && (
              <div className={stls.experience}>
                <div className={stls.icon}>
                  <IconPortalViolet />
                </div>
                <span>{experience}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardTeacher
