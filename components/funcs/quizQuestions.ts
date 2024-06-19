const quiz = [
  {
    idx: 1,
    title: 'Что для Вас более предпочтительно?',
    question1: 'Разбираться в глубинных проблемах и сложных случаях',
    value1: ['clinic', 'psyConsSingle', 'psyCons','psySomatic','psyAnalisys'],
    question2: 'Вдохновлять и мотивировать',
    value2: ['organization', 'psyConsSingle', 'psyCons'],
    question3: 'Работать с детско-родительскими отношениями',
    value3: ['childrenPsy', 'psyCons', 'psySomatic', 'psyConsSingle', 'psyAnalisys'],
    question4: 'Помогать в решении жизненных сложностей',
    value4: ['psyCons', 'psySomatic', 'psyAnalisys', 'clinic']
  },
  {
    idx: 2,
    title:
      'Какое слово в наибольшей степени характеризует Вас?',
    question1: 'Творческий',
    value1: ['psyCons', 'psySomatic', 'psyAnalisys', 'clinic'],
    question2: 'Структурный',
    value2: ['clinic', 'psySomatic'],
    question3: 'Дружелюбный',
    value3: ['childrenPsy','psyCons','organization', 'psySomatic', 'clinic', 'psyAnalisys'],
    question4: 'Дипломатичный',
    value4: ['organization', 'psySomatic', 'clinic']
  },
  {
    idx: 3,
    title:
      'Выберите наиболее похожего на Вас персонажа',
    question1: 'Винни Пух (сангвиник, идейный и отзывчивый)',
    value1: ['childrenPsy','psyCons', 'psySomatic', 'clinic', 'psyAnalisys'],
    question2: 'Сова (меланхолик, мудрая и добрая)',
    value2: ['psyCons', 'psySomatic', 'psyAnalisys', 'clinic'],
    question3: 'Кролик (холерик, рациональный, активный, управленец, любит планировать)',
    value3: ['psyCons','organization', 'psySomatic', 'clinic', 'psyAnalisys'],
    question4: 'Пятачок (флегматик, чувствительный, добрый и нежный)',
    value4: ['psyCons','organization', 'psySomatic', 'clinic', 'psyAnalisys']
  },
  {
    idx: 4,
    title:
      'Какие задачи Вам нравится решать?',
      question1: 'Креативные, творческие',
      value1: ['psyCons', 'psySomatic', 'psyAnalisys', 'clinic'],
      question2: 'Проектные, организационные',
      value2: ['organization', 'psySomatic', 'clinic'],
      question3: 'Сложные, логические',
      value3: ['clinic', 'psySomatic'],
      question4: 'Развивающие, игровые',
      value4: ['childrenPsy', 'psyCons', 'psyAnalisys']
  },
  {
    idx: 5,
    title:
      'Что Вам ближе?',
    question1: 'Абстрактное, образное',
    value1: ['childrenPsy', 'psyCons', 'psyAnalisys'],
    question2: 'Алгоритмичное, логическое',
    value2: ['organization', 'psySomatic', 'clinic'],
    question3: 'Телесное, тактильное',
    value3: ['clinic', 'psySomatic'],
    question4: 'Эмоциональное, чувственное',
    value4: ['psyCons', 'psyAnalisys']
  }
]

export default quiz