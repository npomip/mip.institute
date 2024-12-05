const levelOptions = [
  { value: 'Bachelor', label: 'Бакалавриат' },
  { value: 'Profession', label: 'Профессиональная переподготовка' },
  { value: 'Course', label: 'Повышение квалификации' },
  { value: 'PracticalTraining', label: 'Практическая подготовка' }
]

const formOptions = [
  { value: 'online', label: 'Онлайн' }
  // { value: 'offline', label: 'Очно-заочно' }
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

const lectoriumOptions = [
  { value: null, label: 'Все мероприятия', isDisabled: false },
  { value: 'offline', label: 'Очное', isDisabled: false },
  { value: 'online', label: 'Онлайн', isDisabled: false },
  { value: 'paid', label: 'Платное', isDisabled: true },
  { value: 'free', label: 'Бесплатное', isDisabled: true },
  { value: 'presentation', label: 'Презентация программы', isDisabled: true }
]

export { levelOptions, formOptions, programsOptions, lectoriumOptions }
