import LiveCoursesPoints from './LiveCoursesPoints'
import LiveCoursesTextImage from './LiveCoursesTextImage'

export default function LifeCourseDynamicZones({ props }) {
  switch (props.__typename) {
    case 'ComponentLiveCorsesBlock':
      return <LiveCoursesTextImage props={props.line} />
    case 'ComponentLiveCorsesPoints':
      return <LiveCoursesPoints props={props} />
    default:
      break
  }
}
