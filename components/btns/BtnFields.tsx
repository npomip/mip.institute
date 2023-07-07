import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu, IconSearchAlt } from '@/components/icons'
import { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { closeFieldsTooltipOnOuterClick } from '@/helpers/index'
import StudyFields from '@/components/general/StudyFields'
import Wrapper from '../layout/Wrapper'
import getProgramsData from '@/lib/data/getProgramsData'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import CardTooltip from '../cards/CardTooltip'
import BtnField from './BtnField'
import MainStudyFields from '../general/MainStudyFields'

const BtnFields = () => {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)

  useEffect(() => {
    closeFieldsTooltipOnOuterClick(closeFieldsTooltip)
  }, [])

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
    const filtered = programs.filter(program => {
      const programTitle = convertEnglishToRussian(program.title.toLowerCase())
      const query = convertEnglishToRussian(searchQuery.toLowerCase())
      return programTitle.includes(query)
    })
    setFilteredPrograms(filtered)
  }, [programs, searchQuery])

  const clickHandler = () => {
    setSearchQuery('')
    closeFieldsTooltip
  }

  return (
    <Wrapper>
      <div id='btnFieldsContainer' className={stls.container}>
        <button className={stls.btn} onClick={toggleFieldsTooltip}>
          <span className={stls.icon}>
            <IconMenu />
          </span>
          <span className={stls.text}>Направления обучения</span>
        </button>
        <div
          className={classNames({
            [stls.tooltip]: true,
            [stls.isShown]: fieldsTooltipIsOpen
          })}>
          {/* <div className={stls.inputContainer}>
            <input
              className={stls.input}
              placeholder='Поиск программы'
              type='text'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <div className={stls.iconSearch}>
              <IconSearchAlt />
            </div>
          </div> */}
          {/* {searchQuery && (
            <h1 className={stls.searchResults}>Результаты поиска</h1>
          )} */}
          {/* <div className={stls.card}>
            {searchQuery &&
              filteredPrograms?.slice(0, 4).map((el, i) => (
                <>
                  <CardTooltip key={el.id} profession={el} clickHandler={clickHandler} />
                </>
              ))}
          </div> */}
          {/* {filteredPrograms.length === 0 && searchQuery && (
            <div className={stls.notFound}>
              <p className={stls.sorryText}>К сожалению, по вашему запросу ничего не найдено</p>
              <div onClick={clickHandler} className={stls.allPrograms}>
                <BtnField  href='/programs'>
                  Ознакомиться со всеми направлениями
                </BtnField>
              </div>
            </div>
          )} */}
          <MainStudyFields />
          {!searchQuery && <StudyFields orang />}
        </div>
      </div>
    </Wrapper>
  )
}

export default BtnFields
