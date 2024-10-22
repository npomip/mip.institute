export type TypePageLectoriumPropsQuery = {
  readonly lectorium: Lectorium;
};

export type Lectorium = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  price: string;
  places: string;
  // speaker: Speaker;
  // whatYouWillLearn: WhatYouWillLearn;
  // faq: FAQ[];
};