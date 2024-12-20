import gifts from '@/public/assets/imgs/gratefull/gifts.png'
import planes from '@/public/assets/imgs/gratefull/planes.png'

export const gratefull = {
  tag: 'поздравляем',
  title: (
    <>
      <span>спасибо</span> за заявку!
    </>
  ),
  columns: [
    {
      title: (
        <>
          Ваши данные переданы <br />в приемную комиссию,
        </>
      ),
      text: 'специалист по поступлению скоро позвонит вам, а пока... нам есть, что вам сказать перед тем, как вы примете окончательное решение стать человеком, который будет помогать другим людям.',
      subtitle: (
        <>
          А пока, вы можете воспользоваться <br />
          подарком от блогера
        </>
      ),
      linkText: 'забрать подарок',
      backgroundImage: gifts,
      purple: true,
      orange: false,
      link: 'https://mipinstitute.getcourse.ru/podp_mini_two',
      isPromo: true
    },
    {
      title: (
        <>
          Присоединяйтесь <br />к телеграм-каналу
        </>
      ),
      text: 'Есть нюансы профессии, о которых мы не пишем на сайте, заходите к нам в телеграм, пообщаемся там, ведь психолог должен обладать определенными качествами...',
      subtitle: '',
      linkText: 'перейти в канал',
      backgroundImage: planes,
      purple: false,
      orange: true,
      link: 'https://t.me/institut_mip_bot?start=start3'
    }
  ]
}
