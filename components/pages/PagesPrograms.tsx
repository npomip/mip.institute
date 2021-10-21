import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm
} from '@/components/sections'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

const PagesPrograms = ({ ofType }: PagesProgramsType) => {
  return (
    <>
      <HeroPrograms ofType={ofType} />
      <FilterSearch />
      <Programs ofType={ofType} withQty threerow withFilters />
      <ContactForm />
    </>
  )
}

export default PagesPrograms
