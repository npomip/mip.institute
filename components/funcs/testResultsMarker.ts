const testResultsMarker = item => {
  switch (item) {
    case 'clinic':
      return ['Клиническая психология']
    case 'psyConsSingle':
      return ['Психолог-консультант']
    case 'psyAnalisys':
      return ['Психоанализ и психоаналитическая психотерапия']

    case 'childrenPsy':
      return [
        'Детский психолог',
        'Перинатальный психолог',
        'Педагог – психолог',
        'Логопед с доп. квалификацией Специальный психолог'
      ]
    case 'psyCons':
      return [
        'Психолог-консультант',
        'Психолог-диетолог. Нутрициолог',
        'Арт-терапевт',
        'Гештальт-терапевт'
      ]
    case 'organization':
      return [
        'Психолог бизнес - консультант. Коуч',
        'Корпоративный психолог',
        'Медиатор'
      ]
    case 'psySomatic':
      return [
        'Психосоматика и телесная психотерапия',
        'Телесно-ориентированная терапия',
        'Когнитивно-поведенческий психотерапевт'
      ]

    // case 'organization':
    //   return [
    //     'Корпоративный психолог',
    //     'Медиатор',
    //     ''
    //   ]
    case 'ktp':
      return []
    default:
      return ['Программа']
  }
}

export default testResultsMarker
