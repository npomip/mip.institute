import stls from '@/styles/components/general/InputSearchDesktop.module.sass'
import { IconArrowRight } from '../icons'
import classNames from 'classnames'

type Props = {
  value: string | number | readonly string[]
  onChange: (e: any) => void
  isProgram?: boolean
}

const InputSearchDesktop = ({ value, onChange, isProgram = false }: Props) => {
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

export default InputSearchDesktop
