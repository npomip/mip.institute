import stls from '@/styles/components/program/ProgramCost.module.sass'

const ProgramCost = () => {
  return (
    <div className={stls.container}>
      <span className={stls.discount}>
        <span className={stls.bold}>9 500</span>{' '}
        <span className={stls.light}>&#8381;</span>
      </span>
      <span className={stls.regular}>
        <span className={stls.bold}>13 200</span>{' '}
        <span className={stls.light}>&#8381;</span>
      </span>
    </div>
  )
}

export default ProgramCost
