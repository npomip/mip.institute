import { calculateClosestAdmission, setDateOfEnrollment } from '@/helpers/index'

const ProgramAdmission = () => {
  // return <>{calculateClosestAdmission()}</>
  return <>{setDateOfEnrollment(5, 7)}</>
}

export default ProgramAdmission
