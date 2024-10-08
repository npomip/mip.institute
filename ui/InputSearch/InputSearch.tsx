import stls from './InputSearch.module.sass'
import { IconArrowRight } from '@/components/icons'
import classNames from 'classnames'

type Props = {
  value: string | number | readonly string[]
  onChange: (e: any) => void
  isProgram?: boolean
}

const InputSearch = ({ value, onChange, isProgram = false }: Props) => {
  return (
    <div className={stls.container}>
      <input
        value={value}
        onChange={onChange}
        placeholder={isProgram ? 'Поиск программы' : 'Поиск'}
        className={stls.input}
      />
      <div
        className={classNames({
          [stls.icon]: true,
          [stls.program]: isProgram
        })}>
        <IconArrowRight isProgram={isProgram} />
      </div>
    </div>
  )
}

export default InputSearch
