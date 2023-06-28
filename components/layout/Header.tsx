import stls from '@/styles/components/layout/Header.module.sass'
import { useEffect, useContext, useState, useRef } from 'react'
import Link from 'next/link'
import { routes, company } from '@/config/index'
import { IconArrowRight, IconLocation, IconPhone, IconSearchAlt } from '@/components/icons'
import { handleSwipedEvt } from '@/helpers/index'
import MenuContext from '@/context/menu/menuContext'
import Wrapper from '@/components/layout/Wrapper'
import MenuMobile from '@/components/layout/MenuMobile'
import PopupTrigger from '@/components/general/PopupTrigger'
import Logo from '@/components/general/Logo'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'
import { BtnField, BtnFields } from '@/components/btns'
import { GeneralAddress } from '@/components/general'
import classNames from 'classnames';
import IconContact from '../icons/IconContact'
import ConnectInfo from '../dropdown/ConnectInfo'
import TimeOfWork from '../dropdown/TimeOfWork'
import WeakVision from '../dropdown/WeakVision'
import DistanceStudy from '../dropdown/DistanceStudy'
import IconDropDownClock from '../icons/IconDropDownClock'
import IconWeakVision from '../icons/IconWeakVision'
import IconEnterToPortal from '../icons/IconEnterToPortal'
import getProgramsData from '@/lib/data/getProgramsData'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import CardTooltip from '../cards/CardTooltip'
import IconsDropDown from '../dropdown/IconsDropDown'
import SearchProgramsDropDown from '../dropdown/SearchProgramsDropDown'

const Header = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])


  //dropDown
  // const [selectedIcon, setSelectedIcon] = useState(null);

  // const handleIconClick = (icon) => {
  //   if (selectedIcon !== icon) {
  //     setSelectedIcon(icon);
  //   } 
  //   // else {
  //   //   setSelectedIcon(icon);
  //   // }
  // };

  // направления
  // const [directionOnHover, setDirectionOnHover] = useState(false);

  // const directionsOnHoverHandler = () => {
  //   setDirectionOnHover(prev => !prev)
    
  // }
  // направления

  // // hidden INput
  // const [isInputVisible, setInputVisible] = useState(false);
  // const inputRef = useRef(null);
  // const iconRef = useRef(null);

  // const [searchQuery, setSearchQuery] = useState('')
  // const [filteredPrograms, setFilteredPrograms] = useState([])
  // const [programs, setPrograms] = useState([])

  // useEffect(() => {
  //   const handleDocumentClick = (event) => {
  //     // Проверяем, является ли цель клика иконкой или ее родителями
  //     if (
  //       iconRef && iconRef.current.contains(event.target) ||
  //       inputRef && inputRef.current.contains(event.target)
  //     ) {
  //       return;
  //     }

  //     // Если цель клика не связана с иконкой, скрываем инпут
  //     setInputVisible(false);
  //   };

  //   document.addEventListener('click', handleDocumentClick);

  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   const fetchPrograms = async () => {
  //     const allPrograms = await getProgramsData()
  //     setPrograms(allPrograms)
  //   }
  //   fetchPrograms()
  // }, [])

  // useEffect(() => {
  //   const filtered = programs.filter(program => {
  //     const programTitle = convertEnglishToRussian(program.title.toLowerCase())
  //     const query = convertEnglishToRussian(searchQuery.toLowerCase())
  //     return programTitle.includes(query)
  //   })
  //   setFilteredPrograms(filtered)
  // }, [programs, searchQuery])

  // const handleIconSearchClick = () => {
  //   setInputVisible(prev => !prev);
  // };
  // console.log(inputRef.current)
  // const cardClickHandler = () => {
  //   setInputVisible(prev => !prev);
  //   setSearchQuery('')
  // }
  // // hidden INput
  //dropDown

  return (
    <header className={stls.container}>
      <MenuMobile />
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.topleft}>
            <Link href={routes.front.legal}>
              <a className={stls.linkInfo}>
                Сведения об образовательной организации
              </a>
            </Link>
            {/* <div className={stls.location}>
              <div className={stls.icon}>
                <IconLocation />
              </div>
              <GeneralAddress classNames={[stls.p]} />
            </div> */}
          </div>
          {/* <div className={stls.topright}>
            <div className={stls.phone}>
              <BtnPhone withNumber />
            </div>
            <div className={stls.phoneNoNum}>
              <BtnPhone />
            </div>
            <PopupTrigger btn='epsilon' cta='callMeBack' />
          </div> */}
        </div>
        <div className={stls.row}>
          <Logo atHeader />
          <div className={stls.btns}>
            <BtnPhone />
            <BtnHumburger />
          </div>
          <div className={stls.btnFields}>
            <BtnFields />
          </div>
          {/* {list.map(item => (
            <Link key={item.href + item.val} href={item.href}>
              <a className={stls.link}>{item.val}</a>
            </Link>
          ))} */}
          {/* <div className={stls.searchAndPrograms}>
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
              <div className={stls.card}>
            {searchQuery &&
              filteredPrograms?.slice(0, 4).map((el, i) => (
                <>
                  <CardTooltip key={el.id} profession={el}
                  clickHandler={cardClickHandler} />
                </>
              ))}
          </div>
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
            
            
          </div> */}
          <SearchProgramsDropDown />
          <IconsDropDown />
      {/* <div className={stls.popupWrapper} 
      onMouseLeave={() => handleIconClick(null)}
      >
        <div className={stls.dropdownIcon}>
          <IconContact
            onMouseEnter={() => handleIconClick('icon1')}
            className={selectedIcon === 'icon1' ? stls.selected : ''}
          />
          <IconDropDownClock
            onMouseEnter={() => handleIconClick('icon2')}
            onClick={() => handleIconClick('icon2')}
            className={selectedIcon === 'icon2' ? stls.selected : ''}
          />
          <IconWeakVision
            onMouseEnter={() => handleIconClick('icon3')}
            onClick={() => handleIconClick('icon3')}
            className={selectedIcon === 'icon3' ? stls.selected : ''}
          />
          <IconEnterToPortal
            onMouseEnter={() => handleIconClick('icon4')}
            onClick={() => handleIconClick('icon4')}
            className={selectedIcon === 'icon4' ? stls.selected : ''}
          />
        </div>
        <div
        onMouseEnter={() => console.log('inside')}
          className={classNames(stls.popupContent, {
            [stls.open]: selectedIcon !== null,
          })}
        >
          <ConnectInfo className={selectedIcon === 'icon1' ? stls.visible : stls.hidden} />
          <TimeOfWork className={selectedIcon === 'icon2' ? stls.visible : stls.hidden} />
          <WeakVision className={selectedIcon === 'icon3' ? stls.visible : stls.hidden} />
          <DistanceStudy className={selectedIcon === 'icon4' ? stls.visible : stls.hidden} />
        </div>
      </div> */}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
