import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import getProgramsData from '@/lib/data/getProgramsData'
import styles from '@/styles/components/general/SearchMobile.module.sass'
import { useEffect, useRef, useState } from 'react'
import { BtnField } from '../btns'
import CardTooltip from '../cards/CardTooltip'
import { IconSearchAlt } from '../icons'
import StudyFields from './StudyFields'

export default function SearchMobile() {
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const modalRef = useRef(null)
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const fetchPrograms = async () => {
      const allPrograms = await getProgramsData()
      setPrograms(allPrograms)
    }
    fetchPrograms()
  }, [])

  useEffect(() => {
    const filtered = programs.filter(program => {
      const programTitle = convertEnglishToRussian(program.title.toLowerCase())
      const query = convertEnglishToRussian(searchQuery.toLowerCase())
      return programTitle.includes(query)
    })
    setFilteredPrograms(filtered)
  }, [programs, searchQuery])

  const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // dispatch({ type: actionTypes.RESET_SEARCH });
        setShowModal(false);
        setSearchQuery('')
      }
  };

const closeModalHandle = () => {
  setShowModal(false);
  setSearchQuery('')
}

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleInputClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const clickHandler = () => {
    setSearchQuery('')
    setShowModal(false)
  }

  return (
    <>
    <div className={styles.container}>
      <input
      onChange={handleInputChange}
      value={searchQuery}
      placeholder='Поиск' 
      onClick={handleInputClick}/>
      <div className={styles.icon}>
        <IconSearchAlt />
      </div>
      
    </div>
    {showModal && 
      <div ref={modalRef} className={styles.modal}>
        {!searchQuery && <StudyFields flexend />}
        {searchQuery && (
            <h1 className={styles.searchResults}>Результаты поиска</h1>
          )}
        <div className={styles.card}>
            {searchQuery &&
              filteredPrograms?.slice(0, 4).map((el, i) => (
                <>
                  <CardTooltip key={el.id} profession={el} 
                  clickHandler={clickHandler}
                  />
                </>
              ))}
          </div>
          {filteredPrograms.length === 0 && searchQuery && (
            <div className={styles.notFound}>
              <p className={styles.sorryText}>К сожалению, по вашему запросу ничего не найдено</p>
              <div onClick={clickHandler} className={styles.allPrograms}>
                <BtnField href='/programs'>
                  Ознакомиться со всеми направлениями
                </BtnField>
              </div>
            </div>
          )}
      </div>}
    
    </>
  )
}
