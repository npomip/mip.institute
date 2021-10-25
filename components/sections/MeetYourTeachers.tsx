import stls from '@/styles/components/sections/MeetYourTeachers.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const MeetYourTeachers = ({ teachers }) => {
  console.log(teachers)
  return (
    <section className={stls.container}>
      <Wrapper>Your teachers</Wrapper>
    </section>
  )
}

export default MeetYourTeachers
