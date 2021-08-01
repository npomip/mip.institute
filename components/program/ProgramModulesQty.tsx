import stls from '@/styles/components/program/ProgramModulesQty.module.sass'

const ProgramModulesQty = () => {
  return (
    <div className={stls.container}>
      <p className={stls.qty}>30</p>
      <p className={stls.text}>Тематических модулей</p>
    </div>
  )
}

export default ProgramModulesQty
