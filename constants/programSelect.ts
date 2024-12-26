type SortOption = {
  label: string
  value: {
    field: string
    direction: string
  }
}

const sortOptions: SortOption[] = [
  {
    label: 'Сортировать по умолчанию',
    value: { field: 'default', direction: 'asc' }
  },
  { label: 'По возрастанию цены', value: { field: 'price', direction: 'asc' } },
  { label: 'По убыванию цены', value: { field: 'price', direction: 'desc' } },
  { label: 'По новизне', value: { field: 'date', direction: 'asc' } }
]

export default sortOptions
