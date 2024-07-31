import stls from '@/styles/components/sections/YouTubeVideo.module.sass'
import dynamic from 'next/dynamic'
import { IconClock } from '../icons'
import Wrapper from '../layout/Wrapper'
const _ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
import { ReactPlayerProps } from 'react-player/types/lib'
import classNames from 'classnames'
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>

type Props = {
  title: string
  videoId: string
  isOnMain?: boolean
}
const YouTubeVideo = ({ videoId, title, isOnMain }: Props) => {
  return (
    <section>
      <Wrapper>
        <h2
          className={classNames({
            [stls.title]: true,
            [stls.darkPurple]: !isOnMain
          })}>
          {title}
        </h2>
        {isOnMain && (
          <div className={stls.time}>
            <IconClock colorCode='#DADADA' />
            <p>Длительность 2 минуты</p>
          </div>
        )}
        <div className={stls.playerWrapper}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default YouTubeVideo
