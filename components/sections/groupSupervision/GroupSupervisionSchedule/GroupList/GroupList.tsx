import GroupSchedule from './GroupSchedule/GroupSchedule'

interface IGroupList {
  groupName: string
  dates: string[]
  time: string[]
  classEventDate: string
}

const GroupList: React.FC<{ groupsData: IGroupList[] }> = ({ groupsData }) => (
  <div>
    {groupsData.map((group, index) => (
      <GroupSchedule
        key={index}
        groupName={group.groupName}
        dates={group.dates}
        time={group.time}
      />
    ))}
  </div>
)

export default GroupList
