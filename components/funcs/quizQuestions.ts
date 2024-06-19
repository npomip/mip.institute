const quiz = [
  {
    idx: 1,
    title: 'Что для Вас более предпочтительно?',
    question1: 'Разбираться в глубинных проблемах и сложных случаях',
    value1: ['psyCons','psySomatic'],
    question2: 'Вдохновлять и мотивировать',
    value2: ['organization', 'psyCons'],
    question3: 'Работать с детско-родительскими отношениями',
    value3: ['childrenPsy', 'psyCons', 'psySomatic'],
    question4: 'Помогать в решении жизненных сложностей',
    value4: ['psyCons', 'psySomatic']
  },
  {
    idx: 2,
    title:
      'Какое слово в наибольшей степени характеризует Вас?',
    question1: 'Творческий',
    value1: ['psyCons', 'psySomatic'],
    question2: 'Структурный',
    value2: ['psySomatic'],
    question3: 'Дружелюбный',
    value3: ['childrenPsy','psyCons','organization', 'psySomatic'],
    question4: 'Дипломатичный',
    value4: ['organization', 'psySomatic']
  },
  {
    idx: 3,
    title:
      'Выберите наиболее похожего на Вас персонажа',
    question1: 'Винни Пух (сангвиник, идейный и отзывчивый)',
    value1: ['childrenPsy','psyCons', 'psySomatic'],
    question2: 'Сова (меланхолик, мудрая и добрая)',
    value2: ['psyCons', 'psySomatic'],
    question3: 'Кролик (холерик, рациональный, активный, управленец, любит планировать)',
    value3: ['psyCons','organization', 'psySomatic'],
    question4: 'Пятачок (флегматик, чувствительный, добрый и нежный)',
    value4: ['psyCons','organization', 'psySomatic']
  },
  {
    idx: 4,
    title:
      'Какие задачи Вам нравится решать?',
      question1: 'Креативные, творческие',
      value1: ['psyCons', 'psySomatic'],
      question2: 'Проектные, организационные',
      value2: ['organization', 'psySomatic'],
      question3: 'Сложные, логические',
      value3: ['psySomatic'],
      question4: 'Развивающие, игровые',
      value4: ['childrenPsy', 'psyCons']
  },
  {
    idx: 5,
    title:
      'Что Вам ближе?',
    question1: 'Абстрактное, образное',
    value1: ['childrenPsy', 'psyCons'],
    question2: 'Алгоритмичное, логическое',
    value2: ['organization', 'psySomatic'],
    question3: 'Телесное, тактильное',
    value3: ['psySomatic'],
    question4: 'Эмоциональное, чувственное',
    value4: ['psyCons']
  }
]

export default quiz