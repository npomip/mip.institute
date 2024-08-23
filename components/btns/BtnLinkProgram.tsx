import routes from '@/config/routes'
import Link from 'next/link'
import stls from '@/styles/components/btns/BtnLinkProgram.module.sass'

type Props = {
  amount: number
  text: string
}

const BtnLinkProgram = ({ amount, text }: Props) => {
  return (
    <Link href={routes.front.programs} passHref>
      <button className={stls.linkPrograms}>
        {text}
        <span className={stls.amount}>&nbsp;{amount}</span>
      </button>
    </Link>
  )
}

export default BtnLinkProgram
