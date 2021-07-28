import stls from '@/styles/components/general/VideoPlayerCircle.module.sass'
import { IconPlayer } from '@/components/icons'

const VideoPlayerCircle = () => {
  return (
    <a className={stls.container}>
      <IconPlayer />
    </a>
  )
}

export default VideoPlayerCircle
