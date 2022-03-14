import stls from '@/styles/pages/Legal.module.sass'
import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeLegal } from '@/data/routes'
import {
  dataDocsConstituentLeft,
  dataDocsConstituentRight,
  dataDocsGeneralLeft,
  dataDocsGeneralRight,
  dataDocsRegulationsLeft,
  dataDocsRegulationsRight
} from '@/data/index'
import companyName from '@/data/companyName'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import PageTitle from '@/components/layout/PageTitle'
import {
  ActiveLicenses,
  Diplomas,
  LegalDocs,
  LegalInfo
} from '@/components/sections'

const LegalPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Сведения об образовательной организации | ${companyName}`}
        description={truncate(
          `Действующие лицензии, выдаваемые дипломы
        и сертификаты, основные сведения и нормативные документы`,
          120
        )}
        canonical={`${routesFront.root}${routeLegal}`}
      />
      <PageTitle>
        Сведения <br className={stls.linebrake} /> об организации
      </PageTitle>
      <ActiveLicenses />
      <Diplomas />
      <LegalInfo />
      <LegalDocs
        title='Учредительные документы'
        listLeft={dataDocsConstituentLeft}
        listRight={dataDocsConstituentRight}
      />
      <LegalDocs
        title='Нормативные документы'
        listLeft={dataDocsRegulationsLeft}
        listRight={dataDocsRegulationsRight}
      />
      <LegalDocs
        title='Документы, приказы, положения'
        listLeft={dataDocsGeneralLeft}
        listRight={dataDocsGeneralRight}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.legal })

export default LegalPage
