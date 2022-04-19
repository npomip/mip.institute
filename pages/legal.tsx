import stls from '@/styles/pages/Legal.module.sass'
import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import {
  dataDocsConstituentLeft,
  dataDocsConstituentRight,
  dataDocsGeneralLeft,
  dataDocsGeneralRight,
  dataDocsRegulationsLeft,
  dataDocsRegulationsRight
} from '@/data/index'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import PageTitle from '@/components/layout/PageTitle'
import {
  ActiveLicenses,
  Diplomas,
  LegalDocs,
  LegalInfo
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

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
        title={`Сведения об образовательной организации | ${company.name}`}
        description={truncate(
          `Действующие лицензии, выдаваемые дипломы
        и сертификаты, основные сведения и нормативные документы`,
          120
        )}
        canonical={`${routes.front.root}${routes.front.legal}`}
      />
      <SeoOrganizationJsonLd />
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
  await handleGetStaticProps({ page: routes.front.legal })

export default LegalPage
