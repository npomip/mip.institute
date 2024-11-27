import stls from '@/styles/pages/PageGroupSupervision.module.sass'
import Wrapper from '@/ui/Wrapper'
import GroupSupervisionHero from '@/components/sections/groupSupervision/Hero/GroupSupervisionHero'
import Roles from '@/components/sections/groupSupervision/Roles'
import GroupSupervisionDesc from '../sections/groupSupervision/GroupSupervisionDesc'
import Supervisors from '@/components/sections/groupSupervision/Supervisors'
import GroupSupervisionFor from '../sections/groupSupervision/GroupSupervisionFor'
import GroupSupervisionWhy from '../sections/groupSupervision/GroupSupervisionWhy'
import GroupSupervisionSalary from '../sections/groupSupervision/GroupSupervisionSalary'
import Tariffs from '@/components/sections/groupSupervision/Tariffs/Tariffs'
import SuitableFor from '@/components/sections/groupSupervision/SuitableFor/SuitableFor'
import SupervisorVideo from '@/components/sections/groupSupervision/SupervisorVideo/SupervisorVideo'

const PageGroupSupervision = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <GroupSupervisionHero />
        <GroupSupervisionDesc />
        <Roles />
        <GroupSupervisionFor />
        <GroupSupervisionWhy />
        <GroupSupervisionSalary />
        <Tariffs />
        <SuitableFor />
        <Supervisors />
        <SupervisorVideo />
      </Wrapper>
    </div>
  )
}

export default PageGroupSupervision
