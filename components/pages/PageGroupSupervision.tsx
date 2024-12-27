import stls from '@/styles/pages/PageGroupSupervision.module.sass'
import Wrapper from '@/ui/Wrapper'
import GroupSupervisionHero from '@/components/sections/groupSupervision/Hero/GroupSupervisionHero/GroupSupervisionHero'
import Roles from '@/components/sections/groupSupervision/Roles/Roles'
import GroupSupervisionDesc from '../sections/groupSupervision/GroupSupervisionDesc/GroupSupervisionDesc'
import Supervisors from '@/components/sections/groupSupervision/Supervisors/Supervisors'
import GroupSupervisionWhy from '../sections/groupSupervision/GroupSupervisionWhy/GroupSupervisionWhy'
import Tariffs from '@/components/sections/groupSupervision/Tariffs/Tariffs'
import SuitableFor from '@/components/sections/groupSupervision/SuitableFor/SuitableFor'
import SupervisorVideo from '@/components/sections/groupSupervision/SupervisorVideo/SupervisorVideo'
import GroupSupervisionShort from '../sections/groupSupervision/GroupSupervisionShort/GroupSupervisionShort'
import GroupSupervisionInclude from '../sections/groupSupervision/GroupSupervisionInclude/GroupSupervisionInclude'
import WhichDocument from '@/components/sections/groupSupervision/WhichDocument/WhichDocument'
import GroupSupervisionForm from '../sections/groupSupervision/GroupSupervisionForm/GroupSupervisionForm'
import GroupSupervisionFAQ from '@/components/sections/groupSupervision/GroupSupervisionFAQ/GroupSupervisionFAQ'
import SeoCommon from '../seo/SeoCommon'
import seo from 'constants/GroupSupervision/seo'
import reviewsSupervision from 'constants/GroupSupervision/reviews'
import GroupSupervisionSchedule from '../sections/groupSupervision/GroupSupervisionSchedule/GroupSupervisionSchedule'
import ReviewsWithStars from '../sections/lectorium/ReviewWithStars/ReviewsWithStars'

const PageGroupSupervision = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <SeoCommon
          seo={seo}
          programTitle='Групповая супервизия для психологов онлайн'
        />
        <GroupSupervisionHero />
        <GroupSupervisionDesc />
        <Roles />
        <GroupSupervisionWhy />
        <Tariffs />
        <GroupSupervisionShort />
        <GroupSupervisionInclude />
        <GroupSupervisionSchedule />
        <SuitableFor />
        <WhichDocument />
        <Supervisors />
        <SupervisorVideo />
        <ReviewsWithStars reviews={reviewsSupervision} isSupervision />
        <GroupSupervisionForm />
        <GroupSupervisionFAQ />
      </Wrapper>
    </div>
  )
}

export default PageGroupSupervision
