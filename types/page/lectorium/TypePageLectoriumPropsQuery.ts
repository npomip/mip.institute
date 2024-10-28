import { StaticImageData } from 'next/image'

export type TypePageLectoriumPropsQuery = {
  readonly lectorium: Lectorium
}

export type Lectorium = {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  time: string
  price: string
  places: string
  picture: Picture
  speaker: SpeakerType
  targetDate: string
  endTime: string
  whatYouWillLearn: WhatYouWillLearn
  faq: Faq[]
}

export type Faq = {
  question: string
  answer: string
}

type Picture = {
  url: string
  height: number
  width: number
}

export type WhatYouWillLearn = {
  picture: Picture
  text: Text[]
}

export type WhoIsEventFor = {
  picture: StaticImageData
  text: string
}

export type SpeakerType = {
  picture: Picture
  text: Text[]
  title: string
}

type Text = {
  text: string
}
