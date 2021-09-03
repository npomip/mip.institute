import stls from '@/styles/components/general/SearchDesktop.module.sass'
import { IconSearchAlt } from '@/components/icons'

const SearchDesktop = () => {
  return (
    <div className={stls.container}>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='Поиск программы'
        className={stls.input}
      />
      <div className={stls.icon}>
        <IconSearchAlt />
      </div>
    </div>
  )
}

export default SearchDesktop
