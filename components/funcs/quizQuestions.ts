const quiz = [
  {
    idx: 1,
    title: 'Что для Вас более предпочтительно?',
    question1: 'Разбираться в глубинных проблемах и сложных случаях',
    value1: ['clinic', 'art', 'sand', 'psySomatic', 'geshtalt'],
    question2: 'Вдохновлять и мотивировать',
    value2: ['organization', 'art', 'coach'],
    question3: 'Работать с детско-родительскими отношениями',
    value3: ['childrenPsy', 'ktp', 'sand', 'psyAnalisys'],
    question4: 'Помогать в решении жизненных сложностей',
    value4: ['psyCons', 'art', 'ktp', 'shortTerm', 'psySomatic', 'geshtalt']
  },
  {
    idx: 2,
    title:
      'Вы спринтер (бегун на короткие дистанции) или стайер (бегун на длинные дистанции)?',
    question1: 'Спринтер',
    value1: ['organization', 'childrenPsy', 'psyCons', 'shortTerm'],
    question2: 'Стайер',
    value2: ['clinic', 'psyCons', 'psyAnalisys']
  },
  {
    idx: 3,
    title:
      'Какое слово в наибольшей степени характеризует Вас?',
    question1: 'Творческий',
    value1: ['psyCons', 'art', 'sand','psyAnalisys', 'psySomatic', 'geshtalt'],
    question2: 'Структурный',
    value2: ['clinic', 'ktp', 'shortTerm'],
    question3: 'Дружелюбный',
    value3: ['childrenPsy', 'art', 'coach', 'psySomatic'],
    question4: 'Дипломатичный',
    value4: ['organization', 'shortTerm', 'coach', 'psySomatic']
  },
  {
    idx: 4,
    title:
      'Выберите наиболее похожего на Вас персонажа',
    question1: 'Винни Пух',
    value1: ['childrenPsy', 'art','psySomatic'],
    question2: 'Сова',
    value2: ['clinic','sand','psyAnalisys', 'psySomatic', 'geshtalt'],
    question3: 'Кролик',
    value3: ['childrenPsy', 'art', 'coach', 'psySomatic'],
    question4: 'Пяточок',
    value4: ['organization', 'shortTerm', 'coach', 'psySomatic']
  },
  {
    idx: 5,
    title:
      'Какие задачи Вам нравится решать?',
      question1: 'Креативные, творческие',
      value1: ['psyCons', 'art', 'sand','psyAnalisys', 'psySomatic', 'geshtalt'],
      question2: 'Проектные, организационные',
      value2: ['organization', 'ktp', 'shortTerm', 'coach'],
      question3: 'Сложные, логические',
      value3: ['clinic', 'ktp'],
      question4: 'Развивающие, игровые',
      value4: ['childrenPsy', 'art']
  },
  {
    idx: 6,
    title:
      'Что Вам ближе?',
    question1: 'Абстрактное, образное',
    value1: ['art', 'sand','psyAnalisys'],
    question2: 'Алгоритмичное, логическое',
    value2: ['coach', 'ktp', 'shortTerm'],
    question3: 'Телесное, тактильное',
    value3: ['psySomatic'],
    question4: 'Эмоциональное, чувственное',
    value4: ['psyCons', 'geshtalt', 'art']
  }
]

export default quiz