import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm
} from '@/components/sections'
import { TypeLibPrograms } from '@/types/index'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
  programs?: TypeLibPrograms
}

const PagesPrograms = ({ ofType, programs }: PagesProgramsType) => {
  return (
    <>
      <HeroPrograms ofType={ofType} />
      <FilterSearch />
      <Programs ofType={ofType} withQty threerow programs={programs} />
      <ContactForm />
    </>
  )
}

export default PagesPrograms
