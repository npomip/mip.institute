import stls from '@/styles/components/cards/SlugCard.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'
import classNames from 'classnames'

type ReviewsType = {
  standalone?: boolean
  reviews: any
  reviewsRef?: any
  onMain?: boolean
}

const SlugCard = ({ item, slug, withDate, firstCard = false }) => {
  // console.log(item)
  const newDate = new Date(item?.date)
  const dateOfCourse = new Date(item?.date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })

  return (
    <>
      <Link
        passHref
        href={`${routes.front.root}/${slug}/${
          item.studyFieldSlug || 'studyfield'
        }/${item.slug}`}>
        <div
          className={classNames({
            [stls.seminarCard]: !firstCard,
            [stls.firstCard]: firstCard
          })}>
          <div className={stls.seminarImg}>
            <Image
              src={item?.picture?.url}
              alt={'alt'}
              className={stls.img}
              // width={firstCard ? 760 : 450}
              // height={firstCard ? 430 : 250}
              width={760}
              height={430}
              // layout='responsive'
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>

          <div className={stls.seminarText}>
            <p className={stls.seminarCardTag}>{item.studyField}</p>
            <p className={stls.articleTitle}>{item.title}</p>
            {firstCard && (
              <p className={stls.articleSubtitle}>{item.subtitle}</p>
            )}
            {/* проверка на то, опубликовано ли сегодня? */}
            <p className={stls.date}>
              {new Date().toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'long'
              }) === dateOfCourse
                ? 'Добавлено сегодня'
                : dateOfCourse}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SlugCard
