import Select from 'react-select'

const options = [
  { value: 'default', label: 'Сортировать по умолчанию' },
  { value: 'priceAsc', label: 'По возрастанию цены' },
  { value: 'priceDesc', label: 'По убыванию цены' },
  { value: 'popular', label: 'По популярности' },
  { value: 'new', label: 'По новизне' }
]

const customStyles = {
  control: base => {
    return {
      ...base,
      display: 'flex',
      flexWrap: 'nowrap',
      borderColor: '#6f01c6',
      borderRadius: '50px',
      width: '260px',
      height: '40px',
      fontFamily: 'Stem',
      fontSize: '14px',
      boxShadow: 'none',
      cursor: 'pointer',
      color: 'black',
      '&:hover': {
        backgroundColor: '#6f01c6'
      }
    }
  },
  menu: base => ({
    ...base,
    background: 'white',
    borderColor: '#E9E9E9',
    borderRadius: '10px',
    marginTop: '0',
    width: '245px',
    padding: '10px'
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none'
  }),
  dropdownIndicator: base => ({
    ...base,
    color: 'black',
    width: '35px',
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

const ProgramSelect = () => {
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      styles={customStyles}
      isSearchable={false}
    />
  )
}

export default ProgramSelect
