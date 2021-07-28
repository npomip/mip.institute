import stls from '@/styles/components/general/VideoPlayerCircle.module.sass'
import { IconVideo } from '@/components/icons'

const VideoPlayerCircle = () => {
  return (
    <button className={stls.container}>
      <IconVideo />
    </button>
  )
}

export default VideoPlayerCircle
