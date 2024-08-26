const sortOptions = [
  { value: 'default', label: 'Сортировать по умолчанию' },
  { value: { field: 'price', direction: 'asc' }, label: 'По возрастанию цены' },
  { value: { field: 'price', direction: 'desc' }, label: 'По убыванию цены' },
  { value: { field: 'popular' }, label: 'По популярности' },
  { value: { field: 'date', direction: 'asc' }, label: 'По новизне' }
]



export default sortOptions
