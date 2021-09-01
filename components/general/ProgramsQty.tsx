import stls from '@/styles/components/general/ProgramsQty.module.sass'
import {
  getCasesRuCourseString,
  getCasesRuProfessionString
} from '@/helpers/index'

type ProgramsQtuType = {
  qty: number
  ofType: 'profession' | 'course'
}

const ProgramsQty = ({ qty = 0, ofType = 'course' }: ProgramsQtuType) => {
  return (
    <div className={stls.container}>
      <div className={stls.qty}>{qty}</div>{' '}
      <span className={stls.text}>
        {ofType === 'profession'
          ? getCasesRuProfessionString(qty)
          : ofType === 'course'
          ? getCasesRuCourseString(qty)
          : ''}
      </span>
    </div>
  )
}

export default ProgramsQty
