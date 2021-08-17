import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm
} from '@/components/sections'

const PagesPrograms = ({ programs }) => {
  return (
    <>
      <HeroPrograms />
      <FilterSearch />
      <Programs programs={programs} />
      <ContactForm />
    </>
  )
}

export default PagesPrograms
