export type TypePageLectoriumPropsQuery = {
  readonly lectorium: Lectorium
}

export type Lectorium = {
  slug: string
  title: string
  subtitle: string
  type: LectoriumTypes
  label: string
  description: string
  date: string
  time: string
  price: string
  places: string
  picture: Picture
  speaker: SpeakerType
  lectoriums: Lectorium[]
  targetDate: string
  endTime: string
  whatYouWillLearn: WhatYouWillLearn
  faq: Faq[]
  pdf: {
    url: string
  }
  timepadHref: string
  diploma: Picture
  seo: {
    metaTitle: string
    metaDescription: string
    isSEOFriendly: boolean
    canonicalURL: string
  }
  reviewWithDate: {
    name: string
    text: string
    date: string
    picture: Picture
  }
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
  picture: string
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

export enum LectoriumTypes {
  online = 'online',
  offline = 'offline',
  paid = 'paid',
  free = 'free'
}
