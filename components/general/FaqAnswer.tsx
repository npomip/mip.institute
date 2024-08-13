import stls from '@/styles/components/general/FaqAnswer.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { IconMinus, IconPlus } from '@/components/icons'
import parse from 'html-react-parser'

type Props = {
  question: string | null
  answer: string | null
}

const FaqAnswer = ({ question = null, answer = null }: Props) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <li
      className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <div className={stls.title} onClick={() => setOpen(!isOpen)}>
        <div className={stls.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</div>
        <p className={classNames({ [stls.p]: true, [stls.bold]: isOpen })}>
          {question}
        </p>
      </div>
      <div className={stls.answer}>
        <p>{parse(answer)}</p>
      </div>
    </li>
  )
}

export default FaqAnswer
