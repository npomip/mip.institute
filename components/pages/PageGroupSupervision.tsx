import stls from '@/styles/pages/PageGroupSupervision.module.sass'
import Wrapper from '@/ui/Wrapper'
import GroupSupervisionHero from '@/components/sections/groupSupervision/Hero/GroupSupervisionHero'
import Roles from '@/components/sections/groupSupervision/Roles'
import GroupSupervisionDesc from '../sections/groupSupervision/GroupSupervisionDesc'

const PageGroupSupervision = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <GroupSupervisionHero />
        <GroupSupervisionDesc />
        <Roles />
      </Wrapper>
    </div>
  )
}

export default PageGroupSupervision
