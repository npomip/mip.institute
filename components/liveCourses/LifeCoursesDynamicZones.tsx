import YouTubeVideo from '../sections/YouTubeVideo'
import LiveCoursesDescription from './LiveCoursesDescription'
import LiveCoursesPoints from './LiveCoursesPoints'
import LiveCoursesTextImage from './LiveCoursesTextImage'

export default function LifeCourseDynamicZones({ props }) {
  switch (props.__typename) {
    case 'ComponentLiveCorsesBlock':
      return <LiveCoursesTextImage props={props.line} />
    case 'ComponentLiveCorsesPoints':
      return <LiveCoursesPoints props={props} />
    case 'ComponentSharedRepeatListWithTitle':
      return <LiveCoursesDescription props={props} />
    case 'ComponentSharedVideoLinkWithTitle':
      return (
        <YouTubeVideo props={props} />
      )
    default:
      break
  }
}
