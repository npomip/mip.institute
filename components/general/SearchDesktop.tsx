import stls from '@/styles/components/general/SearchDesktop.module.sass'
import { IconSearchAlt } from '@/components/icons'
import { useContext } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import handleSearch from '@/components/funcs/handleSearch'

const SearchDesktop = () => {
  const { programs, setSearchTerm } = useContext(ProgramsContext)

  return (
    <div className={stls.container}>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='Поиск программы'
        className={stls.input}
        onKeyUp={e => handleSearch({ e, setSearchTerm, programs })}
      />
      <div className={stls.icon}>
        <IconSearchAlt />
      </div>
    </div>
  )
}

export default SearchDesktop
