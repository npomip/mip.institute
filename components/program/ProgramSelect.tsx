import { sortOptions } from 'constants/programSelect'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Select from 'react-select'

type Option = {
  label: string
  value: any
}

type Props = {
  options?: Array<Option>
  mainColor?: string
  onChange: (value: Option) => void
  marginTop?: string
  width?: string
  onMainPage?: boolean
  placeholder?: string
  noOptionsMessage?: (obj: { inputValue: string }) => ReactNode
}

const ProgramSelect = ({
  options = sortOptions,
  mainColor = '#6f01c6',
  marginTop,
  width,
  onChange,
  onMainPage,
  placeholder = 'Направление',
  noOptionsMessage = () => 'Не нашлось подходящих направлений'
}: Props) => {
  const customStyles = {
    control: base => {
      return {
        ...base,
        marginTop: `${marginTop ? marginTop : 0}px`,
        display: 'flex',
        flexWrap: 'nowrap',
        borderColor: `${mainColor}`,
        borderRadius: `${onMainPage ? 10 : 50}px`,
        width: `${onMainPage ? 350 : width ? width : 240}px`,
        height: `${onMainPage ? 50 : 40}px`,
        fontFamily: 'Stem',
        fontSize: '14px',
        boxShadow: 'none',
        cursor: 'pointer',
        color: 'black',
        '&:hover': {
          backgroundColor: `${mainColor}`,
          '.react-select__single-value': {
            color: 'white'
          },
          '.react-select__dropdown-indicator': {
            color: 'white'
          },
          '.react-select__placeholder': {
            color: 'white',
            fontWeight: '500'
          }
        }
      }
    },
    menu: base => ({
      ...base,
      background: 'white',
      borderColor: '#E9E9E9',
      borderRadius: '10px',
      marginTop: `${onMainPage ? 5 : 0}px`,
      width: `${onMainPage ? 350 : width ? width : 240}px`,
      padding: '10px',
      zIndex: '2'
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none'
    }),
    dropdownIndicator: base => ({
      ...base,
      color: 'black',
      width: '30px',
      '&:hover': {
        color: 'white'
      }
    }),
    option: (base, { isSelected }) => {
      return {
        ...base,
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: isSelected ? '500' : '100',
        color: 'black',
        fontSize: '12px',
        backgroundColor: 'none',
        cursor: 'pointer',
        '&:active': {
          background: 'none'
        },
        '&:after': {
          content: isSelected ? '"✓"' : '""'
        }
      }
    },
    singleValue: base => {
      return {
        ...base,
        paddingLeft: '10px',
        paddingRight: '5px',
        '&:hover': {
          color: 'white'
        }
      }
    },
    placeholder: base => {
      return {
        ...base,
        paddingLeft: '10px',
        color: 'black',
        '&:hover': {
          color: 'white',
          fontWeight: '500'
        }
      }
    }
  }

  const router = useRouter()
  const { query } = router
  const { studyFieldSlug } = query

  const defaultValue =
    options.filter(el => el.value === studyFieldSlug)[0] || null

  return (
    <Select
      options={options}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      defaultValue={onMainPage ? null : defaultValue}
      styles={customStyles}
      isSearchable={false}
      onChange={onChange}
      classNamePrefix='react-select'
    />
  )
}

export default ProgramSelect
