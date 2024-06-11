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

const sortOptions = [
  { value: 'default', label: 'Сортировать по умолчанию' },
  { value: { field: 'price', direction: 'asc' }, label: 'По возрастанию цены' },
  { value: { field: 'price', direction: 'desc' }, label: 'По убыванию цены' },
  { value: { field: 'popular' }, label: 'По популярности' },
  { value: { field: 'date', direction: 'asc' }, label: 'По новизне' }
]

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
        width: `${width ? width : 260}px`,
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
      width: `${width ? width : 260}px`,
      padding: '10px'
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
        paddingLeft: '5px',
        paddingRight: '5px',
        '&:hover': {
          color: 'white'
        }
      }
    }
  }

  return (
    <Select
      options={options}
      defaultValue={options[0]}
      styles={customStyles}
      isSearchable={false}
      onChange={onChange}
      classNamePrefix='react-select'
    />
  )
}

export default ProgramSelect
