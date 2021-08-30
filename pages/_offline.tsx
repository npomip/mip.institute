import { number } from '@/data/contact'

const _offline = () => {
  return (
    <div>
      <p>
        Подключение к сети отсутствует. Пожалуйста, попробуйте позже или
        позвоните нам по номеру
        <a href={number.href}>{number.val}</a>
      </p>
    </div>
  )
}

export default _offline
