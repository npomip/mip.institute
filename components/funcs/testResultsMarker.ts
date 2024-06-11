const testResultsMarker = item => {
  switch (item) {
    case 'clinic':
      return [
        'Клиническая психология'
      ]
    case 'organization':
      return [
        'Психолог бизнес - консультант. Коуч',
        'Корпоративный психолог',
        'Медиатор',
      ]
    case 'childrenPsy':
      return [
        'Детский психолог',
        'Перинатальный психолог'
      ]
    case 'psyCons':
      return [
        'Психолог-консультант',
      ]
    case 'art':
      return [
        'Арт-терапевт',
        'Психолог-консультант',
      ]
    case 'sand':
      return [
        'Психолог-консультант',
      ]
    case 'psySomatic':
      return [
        'Психосоматика и телесная психотерапия',
        'Телесно-ориентированная терапия'
      ]
    case 'geshtalt':
      return [
        'Гештальт-терапевт'
      ]
    case 'coach':
      return [
        'Психолог бизнес - консультант. Коуч'
      ]
    case 'psyAnalisys':
      return [
        'Психоанализ и психоаналитическая психотерапия'
      ]
    case 'shortTerm':
      return [
        'Когнитивно-поведенческий психотерапевт'
      ]
    case 'ktp':
      return [
        'Когнитивно-поведенческий психотерапевт'
      ]
    default:
      return ['Программа']
  }
}

export default testResultsMarker

