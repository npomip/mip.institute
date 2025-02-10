const levelOptions = [
  { value: 'Bachelor', label: 'Бакалавриат' },
  { value: 'Profession', label: 'Профессиональная переподготовка' },
  { value: 'Course', label: 'Повышение квалификации' },
  { value: 'PracticalTraining', label: 'Практическая подготовка' },
  { value: 'ShortTerm', label: 'Курсы' }
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
  { value: null, label: 'Тип', isDisabled: false },
  { value: 'offline', label: 'Очное', isDisabled: false },
  { value: 'online', label: 'Онлайн', isDisabled: false },
  { value: 'studentsOnly', label: 'Для студентов', isDisabled: false }
  // { value: 'paid', label: 'Платное', isDisabled: true },
  // { value: 'free', label: 'Бесплатное', isDisabled: true },
  // { value: 'presentation', label: 'Презентация программы', isDisabled: true }
]

const lectoriumPriceOptions = [
  { value: null, label: 'Цена', isDisabled: false },
  { value: 'more', label: 'Платно', isDisabled: false },
  { value: 'equal', label: 'Бесплатно', isDisabled: false }
]

const incomersStudyOptions = [
  { value: 'profession', label: 'Профессиональная переподготовка' },
  { value: 'practicalTraining', label: 'Практическая подготовка' },
  { value: 'course', label: 'Повышение квалификации' },
  { value: 'bachelor', label: 'Бакалавриат' }
]

export {
  levelOptions,
  formOptions,
  programsOptions,
  lectoriumOptions,
  lectoriumPriceOptions,
  incomersStudyOptions
}
