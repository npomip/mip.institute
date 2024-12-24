import React from 'react'
import { TextFreeAccess } from './TextFreeAccess/TextFreeAccess'
import TwoColumns from '@/ui/TwoColumns'
import FormFreeAccess from './FormFreeAccess/FormFreeAccess'

export const ContentFreeAccess = () => {
  return (
    <section>
      <TwoColumns>
        <TextFreeAccess />
        <FormFreeAccess />
      </TwoColumns>
    </section>
  )
}
