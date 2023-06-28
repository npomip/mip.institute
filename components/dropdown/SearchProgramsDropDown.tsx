import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import stls from '@/styles/components/layout/Header.module.sass'
import CardTooltip from '../cards/CardTooltip'
import { IconArrowRight, IconSearchAlt } from '../icons'
import getProgramsData from '@/lib/data/getProgramsData'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import routes from '@/config/routes'
import { BtnField } from '../btns'

export default function SearchProgramsDropDown() {

  const list = [
    {
      href: routes.front.about,
      val: 'Об институте'
    },
    {
      href: routes.front.teachers,
      val: 'Преподаватели'
    },
    {
      href: routes.front.webinars,
      val: 'Вебинары'
    },
    {
      href: routes.front.reviews,
      val: 'Отзывы'
    },
    {
      href: routes.front.payment,
      val: 'Оплата обучения'
    }
  ]

  // направления
  const [directionOnHover, setDirectionOnHover] = useState(false);

  const directionsOnHoverHandler = () => {
    setDirectionOnHover(prev => !prev)
    
  }
  // направления

  // hidden INput
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef(null);
  const iconRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Проверяем, является ли цель клика иконкой или ее родителями
      if (
        iconRef && iconRef.current.contains(event.target) ||
        inputRef && inputRef.current.contains(event.target)
      ) {
        return;
      }
      // Если цель клика не связана с иконкой, скрываем инпут
      setInputVisible(false);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const fetchPrograms = async () => {
      const allPrograms = await getProgramsData()
      setPrograms(allPrograms)
    }
    fetchPrograms()
  }, [])
  const firstShownPrograms = [programs[11], programs[19],programs[8], programs[0]]
  useEffect(() => {
    const filtered = programs.filter(program => {
      const programTitle = convertEnglishToRussian(program.title.toLowerCase())
      const query = convertEnglishToRussian(searchQuery.toLowerCase())
      return programTitle.includes(query)
    })
    setFilteredPrograms(filtered)
  }, [programs, searchQuery])

  const handleIconSearchClick = () => {
    setInputVisible(prev => !prev);
    if (!isInputVisible) {
      setTimeout(() => {
        if (inputRef.current) {
          setTimeout(() => {
            inputRef.current.focus();
          }, 100);
        }
      }, 0);
    }
  };
  const cardClickHandler = () => {
    setInputVisible(prev => !prev);
    setSearchQuery('')
  }
  // hidden INput
  return (
    <div className={stls.searchAndPrograms}>
          <div className={stls.inputContainer}>
            <input
              ref={inputRef}
              className={isInputVisible ? stls.input : stls.inputHidden}
              placeholder='Поиск'
              type='text'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              />
              <div ref={iconRef} className={isInputVisible ? stls.searchIcon : stls.searchIconHidden}
              onClick={handleIconSearchClick}
              >
                <IconSearchAlt />
              </div>
              <div className={isInputVisible ? stls.programsPopUp : stls.hiddenProgramsPopUp}>
              <div className={isInputVisible ? stls.card : stls.hidden}>
                {/* {!searchQuery && 
                <p>Наши популярные курсы</p>} */}
                {!searchQuery && programs[0] !== undefined && firstShownPrograms &&
                firstShownPrograms?.map((el, i) => (
                  <>
                  <CardTooltip key={el.id + el.i} profession={el}
                  clickHandler={cardClickHandler} />
                </>
                ))}
            {searchQuery &&
              filteredPrograms?.slice(0, 4).map((el, i) => (
                <>
                  <CardTooltip key={el.id + el.i} profession={el}
                  clickHandler={cardClickHandler} />
                </>
              ))}
          </div>
          {filteredPrograms.length === 0 && searchQuery && (
            <div className={stls.notFound}>
              <p className={stls.sorryText}>К сожалению, по вашему запросу ничего не найдено</p>
              <div onClick={cardClickHandler} className={stls.allPrograms}>
                <BtnField  href='/programs'>
                  Ознакомиться со всеми направлениями
                </BtnField>
              </div>
            </div>
          )}
              </div>
            </div>
            <div className={ stls.desriptionPopup} onMouseEnter={directionsOnHoverHandler} onMouseLeave={directionsOnHoverHandler}>
              <p className={ directionOnHover ? stls.directionPopupTextShown :stls.desriptionPopupText}>Об институте</p>
              <div  className={directionOnHover ? stls.directionsPopup : stls.hidden}>
              <div className={stls.oneDirection} >
              {list.map(item => (
                <Link passHref={true} key={item.href + item.val}  href={item.href}>
                <div  className={stls.popupLink}>
              
                <a >{item.val}</a>
              
              <div className={stls.arrowIcon}>

                <IconArrowRight />
              </div>
              </div>
              </Link>
            ))}
              </div>
            </div>
              </div>
              <a href={'tel:+7-495-648-62-26'} className={isInputVisible ? stls.hiddenText : stls.showText}>+7 (495) 648-62-26</a>
            
            
          </div>
  )
}