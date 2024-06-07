const quiz = [
  {
    idx: 1,
    title: 'Что для Вас более предпочтительно?',
    question1: 'Разбираться в глубинных проблемах и сложных случаях',
    value1: ['organization', 'psySomatic', 'psyCons'],
    question2: 'Вдохновлять и мотивировать',
    value2: ['organization', 'psySomatic'],
    question3: 'Работать с детско-родительскими отношениями',
    value3: ['childrenPsy', 'psyCons'],
    question4: 'Помогать в решении жизненных сложностей',
    value4: ['psyCons', 'psySomatic']
  },
  {
    idx: 2,
    title:
      'Вы спринтер (бегун на короткие дистанции) или стайер (бегун на длинные дистанции)?',
    question1: 'Спринтер',
    value1: ['organization', 'childrenPsy', 'psyCons', 'psySomatic'],
    question2: 'Стайер',
    value2: [ 'psyCons']
  },
  {
    idx: 3,
    title:
      'Какое слово в наибольшей степени характеризует Вас?',
    question1: 'Творческий',
    value1: ['psyCons', 'psySomatic'],
    question2: 'Структурный',
    value2: [],
    question3: 'Дружелюбный',
    value3: ['childrenPsy', 'psySomatic'],
    question4: 'Дипломатичный',
    value4: ['organization', 'psySomatic']
  },
  {
    idx: 4,
    title:
      'Выберите наиболее похожего на Вас персонажа',
    question1: 'Винни-Пух',
    value1: ['childrenPsy','psySomatic'],
    question2: 'Сова',
    value2: [ 'psyCons', 'psySomatic'],
    question3: 'Кролик',
    value3: ['organization'],
    question4: 'Пятачок',
    value4: ['psyCons', 'psySomatic']
  },
  {
    idx: 5,
    title:
      'Какие задачи Вам нравится решать?',
      question1: 'Креативные, творческие',
      value1: ['psyCons', 'psySomatic'],
      question2: 'Проектные, организационные',
      value2: ['organization'],
      question3: 'Сложные, логические',
      value3: ['organization', 'psySomatic'],
      question4: 'Развивающие, игровые',
      value4: ['childrenPsy']
  },
  {
    idx: 6,
    title:
      'Что Вам ближе?',
    question1: 'Абстрактное, образное',
    value1: ['psyCons', 'psySomatic'],
    question2: 'Алгоритмичное, логическое',
    value2: ['psySomatic'],
    question3: 'Телесное, тактильное',
    value3: ['psySomatic', 'psyCons'],
    question4: 'Эмоциональное, чувственное',
    value4: ['psyCons']
  }
]

export default quiz