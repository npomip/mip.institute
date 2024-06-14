const quiz = [
  {
    idx: 1,
    title: 'Что для Вас более предпочтительно?',
    question1: 'Разбираться в глубинных проблемах и сложных случаях',
    value1: ['clinic', 'psyConsSingle', 'psyCons', 'psySomatic'],
    question2: 'Вдохновлять и мотивировать',
    value2: ['organization', 'psyConsSingle'],
    question3: 'Работать с детско-родительскими отношениями',
    value3: ['childrenPsy', 'psyCons', 'psySomatic', 'psyConsSingle', 'psyAnalisys'],
    question4: 'Помогать в решении жизненных сложностей',
    value4: ['psyCons','psyConsSingle', 'psySomatic']
  },
  {
    idx: 2,
    title:
      'Вы спринтер (бегун на короткие дистанции) или стайер (бегун на длинные дистанции)?',
    question1: 'Спринтер',
    value1: ['organization', 'childrenPsy', 'psyConsSingle', 'psySomatic'],
    question2: 'Стайер',
    value2: [ 'clinic','psyCons', 'psyAnalisys']
  },
  {
    idx: 3,
    title:
      'Какое слово в наибольшей степени характеризует Вас?',
    question1: 'Творческий',
    value1: ['psyCons','psyConsSingle', 'psyAnalisys', 'psySomatic'],
    question2: 'Структурный',
    value2: ['clinic', 'psySomatic'],
    question3: 'Дружелюбный',
    value3: ['childrenPsy','psyConsSingle','organization', 'psySomatic'],
    question4: 'Дипломатичный',
    value4: ['organization', 'psySomatic']
  },
  {
    idx: 4,
    title:
      'Выберите наиболее похожего на Вас персонажа',
    question1: 'Винни-Пух',
    value1: ['childrenPsy','psySomatic', 'psyConsSingle'],
    question2: 'Сова',
    value2: [ 'clinic', 'psyCons','psyAnalisys', 'psySomatic', 'psyConsSingle'],
    question3: 'Кролик',
    value3: ['organization', 'psySomatic', 'psyConsSingle'],
    question4: 'Пятачок',
    value4: ['psyCons','psyConsSingle','organization', 'psySomatic']
  },
  {
    idx: 5,
    title:
      'Какие задачи Вам нравится решать?',
      question1: 'Креативные, творческие',
      value1: ['psyCons','psyConsSingle', 'psySomatic', 'psyAnalisys'],
      question2: 'Проектные, организационные',
      value2: ['organization', 'psySomatic'],
      question3: 'Сложные, логические',
      value3: ['clinic', 'psySomatic'],
      question4: 'Развивающие, игровые',
      value4: ['childrenPsy', 'psyConsSingle']
  },
  {
    idx: 6,
    title:
      'Что Вам ближе?',
    question1: 'Абстрактное, образное',
    value1: ['psyConsSingle', 'psyCons', 'psyAnalisys'],
    question2: 'Алгоритмичное, логическое',
    value2: ['organization', 'psySomatic'],
    question3: 'Телесное, тактильное',
    value3: ['psySomatic'],
    question4: 'Эмоциональное, чувственное',
    value4: ['psyCons', 'psyConsSingle']
  }
]

export default quiz