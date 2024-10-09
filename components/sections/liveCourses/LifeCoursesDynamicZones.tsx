import YouTubeVideo from '@/components/sections/YouTubeVideo'
import LiveCoursesDescription from './LiveCoursesDescription'
import LiveCoursesGetAcess from './LiveCoursesGetAcess'
import LiveCoursesPoints from './LiveCoursesPoints'
import LiveCoursesTextImage from './LiveCoursesTextImage'

export default function LifeCourseDynamicZones({ props, openModal }) {
  switch (props.__typename) {
    case 'ComponentLiveCorsesBlock':
      return (
        <>
          <LiveCoursesTextImage props={props.line} />
          <LiveCoursesGetAcess marginBottom={90} openModal={openModal} />
        </>
      )
    case 'ComponentLiveCorsesPoints':
      return <LiveCoursesPoints props={props} />
    case 'ComponentSharedRepeatListWithTitle':
      return <LiveCoursesDescription props={props} />
    case 'ComponentSharedVideoLinkWithTitle':
      return <YouTubeVideo videoId='2WALhR1ZcszBWNRXQ2kNSB' />
    default:
      break
  }
}
