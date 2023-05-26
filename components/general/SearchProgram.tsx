import fieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import closeFieldsTooltipOnOuterClick from '@/helpers/closeFieldsTooltipOnOuterClick'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import getProgramsData from '@/lib/data/getProgramsData'
import { useContext, useEffect, useState } from 'react'
import CardTooltip from '../cards/CardTooltip'
import StudyFields from './StudyFields'

export default function SearchProgram() {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
  useContext(fieldsTooltipContext)

  const [searchQuery, setSearchQuery] = useState('')
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
    const filtered = programs.filter((program) => {
      const programTitle = convertEnglishToRussian(program.title.toLowerCase());
      const query = convertEnglishToRussian(searchQuery.toLowerCase());
      return programTitle.includes(query);
    });
    setFilteredPrograms(filtered);
  }, [programs, searchQuery]);

  const clickHandler = () => {
    setSearchQuery('')
    closeFieldsTooltip
  }
  const [btnShow, setBtnShow] = useState(false)
  const onFocusHandler = () => {
    setBtnShow(prev=>!prev)
  }

  return (
    <div>
      {/* <button onClick={toggleFieldsTooltip}> */}
      <input
          type='text'
          onFocus={onFocusHandler}
          // onBlur={onFocusHandler}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
          {btnShow && !searchQuery && <StudyFields />}
          {/* </button> */}
          {/* <div className={stls.card}> */}
          {searchQuery && 
          filteredPrograms?.slice(0,4).map((el, i) => (
          <>
          <CardTooltip profession={el} clickHandler={clickHandler} />
          </>
          ))}
          </div>
    // </div>
  )
}
