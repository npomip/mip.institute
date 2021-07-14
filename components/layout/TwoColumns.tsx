import stls from '@/styles/components/layout/TwoColumns.module.sass'

const TwoColumns = ({ children }) => {
  return <div className={stls.container}>{children}</div>
}

export default TwoColumns
