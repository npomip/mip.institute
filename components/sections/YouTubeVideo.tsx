import stls from '@/styles/components/sections/YouTubeVideo.module.sass'
import { IconClock } from '../icons'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'

type Props = {
  isOnMain?: boolean
  videoId?: string
  title?: string
  props?: {
    title: string
    videoLink: string
  }
}
const YouTubeVideo = ({ isOnMain, videoId, title, props }: Props) => {
  return (
    <section>
      <Wrapper>
        <h2
          className={classNames({
            [stls.title]: true,
            [stls.darkPurple]: !isOnMain
          })}>
          {props ? props.title : title}
        </h2>
        {isOnMain && (
          <div className={stls.time}>
            <IconClock colorCode='#DADADA' />
            <p>Длительность 2 минуты</p>
          </div>
        )}
        <div className={stls.playerWrapper}>
          <iframe
            src={`https://kinescope.io/embed/${
              props?.videoLink ? props?.videoLink : videoId
            }`}
            allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'></iframe>
        </div>
      </Wrapper>
    </section>
  )
}

export default YouTubeVideo
