import React from 'react'
import { TextFreeAccess } from './TextFreeAccess/TextFreeAccess'
import { FormFreeAccess } from './FormFreeAccess/FormFreeAccess'
import TwoColumns from '@/ui/TwoColumns'

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
