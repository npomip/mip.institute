import stls from '@/styles/components/general/VideoPlayerCircle.module.sass'
import { IconPlayer } from '@/components/icons'

const VideoPlayerCircle = () => {
  return (
    <button className={stls.container}>
      <IconPlayer />
    </button>
  )
}

export default VideoPlayerCircle
