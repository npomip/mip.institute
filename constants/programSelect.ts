const sortOptions = [
  { value: 'default', label: 'Сортировать по умолчанию' },
  { value: { field: 'price', direction: 'asc' }, label: 'По возрастанию цены' },
  { value: { field: 'price', direction: 'desc' }, label: 'По убыванию цены' },
  { value: { field: 'popular' }, label: 'По популярности' },
  { value: { field: 'date', direction: 'asc' }, label: 'По новизне' }
]

const levelOptions = [
  { value: 'bachelor', label: 'Высшее образование' },
  { value: 'professions', label: 'Профессиональная переподготовка' },
  { value: 'courses', label: 'Повышение квалификации' },
]

const formOptions = [
  { value: 'online', label: 'Онлайн' },
  { value: 'offline', label: 'Очно-заочно' }
]

const programsOptions = [
  { value: 'online', label: 'Детская психология' },
  { value: 'offline', label: 'Клиническая психология' },
  { value: 'offline', label: 'Психотерапия' },
  { value: 'offline', label: 'Общая психология' },
  { value: 'offline', label: 'Консультирование' },
  { value: 'offline', label: 'Организационная психология' },
  { value: 'offline', label: 'Диетология и нутрициология' }
]

export { sortOptions, levelOptions, formOptions, programsOptions }
