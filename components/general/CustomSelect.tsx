import { ReactNode } from 'react'
import Select from 'react-select'

export type SelectOption = {
  label: string
  value: any
}

type Props = {
  options: Array<SelectOption>
  mainColor?: string
  onChange: (value: SelectOption) => void
  marginTop?: string
  placeholder?: string
  noOptionsMessage?: (obj: { inputValue: string }) => ReactNode
  value?: SelectOption
  isDisabled?: boolean
}

const CustomSelect = ({
  options,
  mainColor = '#6f01c6',
  marginTop,
  onChange,
  placeholder = 'Выберите направление',
  noOptionsMessage = () => 'Ничего не найдено',
  value,
  isDisabled
}: Props) => {
  const customStyles = {
    control: base => {
      return {
        ...base,
        marginTop: `${marginTop ? marginTop : 0}px`,
        display: 'flex',
        flexWrap: 'nowrap',
        borderColor: `${mainColor}`,
        borderRadius: `10px`,
        width: '100%',
        maxWidth: `380px`,
        height: `50px`,
        fontFamily: 'Stem',
        fontSize: '14px',
        boxShadow: 'none',
        cursor: 'pointer',
        color: 'black',
        '@media (max-width: 768px)': {
          maxWidth: '100%'
        },
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
      marginTop: `5px`,
      width: '100%',
      maxWidth: `350px`,
      padding: '10px',
      zIndex: '2',
      '@media (max-width: 768px)': {
        maxWidth: '100%'
      }
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
    placeholder: (base, { isDisabled }) => {
      return {
        ...base,
        paddingLeft: '10px',
        color: isDisabled ? 'gray' : 'black',
        '&:hover': {
          color: 'white',
          fontWeight: '500'
        }
      }
    }
  }

  return (
    <Select
      key={value?.label}
      options={options}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      styles={customStyles}
      isSearchable={false}
      onChange={onChange}
      classNamePrefix='react-select'
      value={value}
      isDisabled={isDisabled}
    />
  )
}

export default CustomSelect
