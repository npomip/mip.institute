import protagonist from '@/public/assets/imgs/groupSupervision/Roles/protagonist.png'
import client from '@/public/assets/imgs/groupSupervision/Roles/client.png'
import observer from '@/public/assets/imgs/groupSupervision/Roles/observer.png'
import supervisor from '@/public/assets/imgs/groupSupervision/Roles/supervisors.png'

// Супервизант
// Начинающий или практикующий психолог, который:
// Желает расширить профессиональный кругозор за счёт анализа множества различных проблемных ситуаций и подходов к их решению
// Хочет проанализировать свою работу, выявить сильные и слабые стороны, стать увереннее в себе
// Открыт к обучению, готов задавать вопросы и активно участвовать в дискуссии по теме консультации
// Готов к детальному разбору своего кейса и конструктивной обратной связи

const rolesDescription = [
  {
    title: 'Супервизор',
    subtitle: 'Опытный психолог, наставник, который:',
    image: protagonist,
    text: [
      'Обеспечивает доброжелательную и безопасную атмосферу для участников супервизии',
      'Дает супервизиантам обратную связь ',
      'Определяет проблемные места и предлагает супервизиантам пути профессионального развития',
      'Выступает примером профессионального и этического поведения в работе с разными случаями '
    ]
  },
  {
    title: 'Супервизант',
    subtitle: 'Начинающий или практикующий психолог, который:',
    image: client,
    text: [
      'Желает расширить профессиональный кругозор за счёт анализа множества различных проблемных ситуаций и подходов к их решению',
      'Хочет проанализировать свою работу, выявить сильные и слабые стороны, стать увереннее в себе',
      'Открыт к обучению, готов задавать вопросы и активно участвовать в дискуссии по теме консультации',
      'Готов к детальному разбору своего кейса и конструктивной обратной связи'
    ]
  },
  // {
  //   title: 'Наблюдатель',
  //   subtitle: 'Участник, который выполняет следующие функции:',
  //   image: observer,
  //   text: [
  //     'Наблюдает за процессом совместной работы протагониста и клиента',
  //     'Задает уточняющие вопросы касательно техник и методов, которые протагонист планирует использовать в работе по конкретному запросу',
  //     'Дает обратную связь протагонисту',
  //     'Принимает участие в обсуждении по теме консультации'
  //   ]
  // },
  // {
  //   title: 'Супервизоры',
  //   subtitle: 'Специалисты, которые:',
  //   image: supervisor,
  //   text: [
  //     'Организуют процесс супервизии',
  //     'Создают доброжелательную и безопасную атмосферу для участников',
  //     'Участвуют в дискуссии по теме консультации',
  //     'Дают протагонисту обратную связь'
  //   ]
  // }
]

const rolesBtns = ['Протагонист', 'Клиент', 'Наблюдатель', 'Супервизоры']

export { rolesDescription, rolesBtns }
