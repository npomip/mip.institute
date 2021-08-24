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
      <HeroPrograms />
      <FilterSearch />
      <Programs ofType={ofType} />
      <ContactForm />
    </>
  )
}

export default PagesPrograms
