import routes from '@/config/routes'
import Link from 'next/link'
import stls from '@/styles/components/btns/BtnLinkProgram.module.sass'
import classNames from 'classnames'

type Props = {
  amount: number
  text: string
  isVisibleMobile?: boolean
}

const BtnLinkProgram = ({ amount, text, isVisibleMobile = false }: Props) => {
  return (
    <Link href={routes.front.programs} passHref>
      <button
        className={classNames({
          [stls.linkPrograms]: true,
          [stls.hidden]: !isVisibleMobile,
          [stls.visible]: isVisibleMobile
        })}>
        {text}
        <span className={stls.amount}>&nbsp;{amount}</span>
      </button>
    </Link>
  )
}

export default BtnLinkProgram
