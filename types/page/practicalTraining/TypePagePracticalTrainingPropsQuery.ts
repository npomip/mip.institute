type TypePagePracticalTrainingPropsQuery = {
  readonly practicalTraining: PracticalTraining
}

export type PracticalTraining = {
  title: string;
  subtitle: string;
  duration: string;
  slug: string;
  price: number | null;
  practicalList: PracticalList;
  heroPicture: string | null;
  diploma1: string | null;
  termsPoints: TermPoint[];
  briefProgram: BriefProgram[];
  courseResult: CourseResult;
  whatYouWillLearn: WhatYouWillLearn;
  whatYouWillLearnPhoto: string | null;
  whatInProgram: WhatInProgram;
  programDescription: ProgramDescription;
  descriptionCards: DescriptionCard[];
  teachers: any[]; // Assuming the structure of teacher objects is unknown
  qnas: any[]; // Assuming the structure of Q&A objects is unknown
  seo: any | null; // Assuming the structure of SEO objects is unknown
} | null;

type PracticalList = {
  item: PracticalListItem[];
};

export type PracticalListItem = {
  title: string;
  text: string;
  icon: string;
};

type TermPoint = {
  text: string;
};

type BriefProgram = {
  title: string;
  record: BlogRecord[];
};

type BlogRecord = {
  text: string;
};

type CourseResult = {
  list: SharedText[];
};

type WhatYouWillLearn = {
  list: SharedText[];
};

type WhatInProgram = {
  list: SharedText[];
};

type ProgramDescription = {
  title: string;
  subtitle: string;
  subtitleColor: string;
};

type DescriptionCard = {
  item: DescriptionCardItem[];
};

type DescriptionCardItem = {
  title: string;
  subtitle: string;
  picture: string | null;
};

type SharedText = {
  text: string;
};


export default TypePagePracticalTrainingPropsQuery