import LectoriumIndexCard from '@/components/cards/LectoriumIndexCard'
import routes from '@/config/routes'
import { handleGetStaticProps } from '@/lib/index'
import Wrapper from '@/ui/Wrapper'
import { GetStaticProps } from 'next'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { NextSeo } from 'next-seo'
import stls from '@/styles/pages/LectoriumSlug.module.sass'
import FilterTag from '@/components/filters/FilterTag'
import { useRouter } from 'next/router'
import CustomSelect from '@/ui/CustomSelect'
import { lectoriumOptoins } from 'constants/customSelect'
import Calendar from '@/ui/Calendar'
import { Fragment } from 'react'

const LectoriumPage = ({ lectoriums }) => {
  const router = useRouter()
  const dates = lectoriums
    .map(lectorium => lectorium.targetDate)
    .concat('2024-10-30T15:00:00.000Z')

  return (
    <div className={stls.container}>
      <Wrapper>
        <NextSeo nofollow={true} noindex={true} />
        <h1>Семинары по психологии</h1>
        <h2>
          Это раздел с образовательными мероприятия, такие как очные мастер
          классы, супервизии, воркшопы и т.п
        </h2>
        <div className={stls.tags}>
          <FilterTag
            onClick={() => router.push('/webinars')}
            isActive={false}
            isCategories>
            Вебинары
          </FilterTag>
          <FilterTag
            onClick={() => router.push('/lectorium')}
            isActive={true}
            isCategories>
            Внутренние мероприятия
          </FilterTag>
          <FilterTag
            onClick={() => router.push('/lectorium')}
            isActive={false}
            isCategories>
            Внешние мероприятия
          </FilterTag>
          <CustomSelect
            onChange={() => {}}
            options={lectoriumOptoins}
            radius='50'
            height='30'
            mainColor='#6F6F6F'
            placeholder='Тип мероприятия'
          />
          <FilterTag
            onClick={() => router.push('/lectorium')}
            isActive={false}
            disabled>
            Прошедшие мероприятия
          </FilterTag>
        </div>

        <div className={stls.lectoriumWrapper}>
          {lectoriums.map((lectorium, index) => (
            <Fragment key={lectorium.slug}>
              <LectoriumIndexCard card={lectorium} />
              {index === 1 && <Calendar dates={dates} />}
            </Fragment>
          ))}

          {lectoriums.length === 1 && <Calendar dates={dates} />}
        </div>
      </Wrapper>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.lectoriums })

export default LectoriumPage
