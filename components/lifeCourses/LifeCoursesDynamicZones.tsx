import LiveCorsesTextImage from "./LiveCorsesTextImage"
import LiveCorsesPoints from "./LiveCoursesPoints"

export default function LifeCourseDynamicZones({ props }) {
  switch (props.__typename) {
    case 'ComponentLiveCorsesBlock':
      return <LiveCorsesTextImage props={props.line} />
    case 'ComponentLiveCorsesPoints':
      return <LiveCorsesPoints props={props} />
    default:
      break
  }
}