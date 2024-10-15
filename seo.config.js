import truncate from "./helpers/general/truncate"

const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: 'https://mip.institute',
    site_name: 'MIP'
  },
  defaultTitle: 'Московский Институт Психологии',
  description: truncate(
    'Онлайн-институт востребованных профессий в области психологии (психоанализа, клинической психологии, бизнес-психологии, гештальт терапии, КПТ, психолого-педагогического и специального (дефектологического) направлений. Институт реализует программы дополнительного профессионального образования: повышение квалификации, профессиональной переподготовки и курсы Life',
    120
  ),
  canonical: 'https://mip.institute'
}

export default seo
