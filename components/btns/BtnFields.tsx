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
          <MainStudyFields />
          <StudyFields orang />
        </div>
      </div>
    </Wrapper>
  )
}

export default BtnFields
