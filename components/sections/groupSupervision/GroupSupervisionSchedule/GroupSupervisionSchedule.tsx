import stls from '@/components/sections/groupSupervision/GroupSupervisionSchedule/GroupSupervisionSchedule.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import { useState } from 'react'
import Calendar from '@/ui/Calendar'
import TwoColumns from '@/ui/TwoColumns'
import GroupList from './GroupList/GroupList'
import { groupsData } from 'constants/GroupSupervision/helpers'
import { GroupData } from '@/types/page/group-supervision/GroupSupervisionSchedule'

const GroupSupervisionSchedule = () => {
  const [data, setData] = useState<GroupData[]>(groupsData)

  return (
    <section className={stls.container}>
      <TwoColumns>
        <div className={stls.containerText}>
          <h2 className={stls.title}>
            <span className={stls.coloredTitle}>расписание</span>{' '}
            супервизионного цикла
          </h2>
          <p className={stls.textBlock}>
            <span>Занятия проходят</span>{' '}
            <span className={stls.highlightedText}>1 раз в неделю</span>{' '}
            <span>
              в течение 4-х недель в онлайн формате на платформе Контур.Толк
            </span>
          </p>
          <GroupList groupsData={data} />
          <div className={stls.btn}>
            <PopupTrigger btn='alpha' cta='signUp' />
          </div>
        </div>
        <div>
          <Calendar dates={data} selectRange={false} customStyle={true}/>
        </div>
      </TwoColumns>
    </section>
  )
}

export default GroupSupervisionSchedule
