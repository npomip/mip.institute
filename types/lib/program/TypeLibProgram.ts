import { TypeLibGeneralPicture, TypeLibTeachers } from '@/types/index'

type TypeLibProgram = {
  id: string | null
  title?: string | null
  slug?: string | null
  studyField?: string | null
  studyFieldSlug: string | null
  type?: string | null
  typeLabel?: string | null
  studyMounthsDuration?: string | null
  heroPicture?: TypeLibGeneralPicture | null
  studyForm?: string | null
  description?: string | null
  studyFormLabel?: string | null
  studyHours?: string | null
  WhatYouWillLearn?: string | null
  ForWhom?: string | null
  fullTitle?: string | null
  shortContents?: string | null
  resumeTitle?: string | null
  entrySalary?: string | null
  resumeSkills?: string | null
  jobTitles?: string | null
  qualification?: string | null
  typeFullLabel?: string | null
  price?: string | null
  discount?: string | null
  questions?: string | null
  qnas?:
    | {
        question?: string | null
        answer?: string | null
      }[]
    | null
  teachers?: TypeLibTeachers | null
} | null

export default TypeLibProgram
