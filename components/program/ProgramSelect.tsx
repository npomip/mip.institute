import sortOptions from 'constants/programSelect'
import { useRouter } from 'next/router'
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
}

const ProgramSelect = ({
  options = sortOptions,
  mainColor = '#6f01c6',
  marginTop,
  width,
  onChange
}: Props) => {
  const customStyles = {
    control: base => {
      return {
        ...base,
        marginTop: `${marginTop ? marginTop : 0}px`,
        display: 'flex',
        flexWrap: 'nowrap',
        borderColor: `${mainColor}`,
        borderRadius: '50px',
        width: `${width ? width : 240}px`,
        height: '40px',
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
          }
        }
      }
    },
    menu: base => ({
      ...base,
      background: 'white',
      borderColor: '#E9E9E9',
      borderRadius: '10px',
      marginTop: '0',
      width: `${width ? width : 240}px`,
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
        paddingLeft: '10px'
      }
    }
  }

  const router = useRouter()
  const { query } = router
  const { studyFieldSlug } = query

  return (
    <Select
      options={options}
      placeholder='Выберите направление'
      noOptionsMessage={() => 'Не нашлось подходящих направлений'}
      defaultValue={
        options[0]?.value === 'default'
          ? options[0]
          : options.filter(el => el.value === studyFieldSlug)
      }
      styles={customStyles}
      isSearchable={false}
      onChange={onChange}
      classNamePrefix='react-select'
    />
  )
}

export default ProgramSelect
