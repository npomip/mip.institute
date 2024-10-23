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
  // speaker: Speaker;
  // whatYouWillLearn: WhatYouWillLearn;
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
