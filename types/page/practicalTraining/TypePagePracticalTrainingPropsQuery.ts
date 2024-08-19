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
  heroPicture: HeroPicture;
  diploma1: PracticalDiploma;
  termsPoints: TermPoint[];
  briefProgram: BriefProgram[];
  courseResult: CourseResult;
  whatYouWillLearn: WhatYouWillLearn;
  whatYouWillLearnPhoto: string | null;
  whatInProgram: WhatInProgram;
  programDescription: ProgramDescription;
  descriptionCards: DescriptionCard;
  teachers: any[]; // Assuming the structure of teacher objects is unknown
  qnas: any[]; // Assuming the structure of Q&A objects is unknown
  seo: any | null; // Assuming the structure of SEO objects is unknown
} | null;

type PracticalList = {
  item: PracticalListItem[];
};

export type PracticalDiploma = {
  width: number
  height: number
  url: string
}

type HeroPicture = {
  height: number;
  url: string;
  width: number;
};

export type PracticalListItem = {
  title: string;
  text: string;
  icon: string;
};

type TermPoint = {
  text: string;
};

export type BriefProgram = {
  title: string;
  record: BlogRecord[];
};

export type BlogRecord = {
  text: string;
};

type CourseResult = {
  list: SharedText[];
};

type WhatYouWillLearn = {
  list: SharedText[];
};

export type WhatInProgram = {
  list: SharedText[];
};

export type ProgramDescription = {
  title: string;
  subtitle: string;
  subtitleColor: string;
};

type DescriptionCardImage = {
  height: number;
  url: string;
  width: number;
}

type DescriptionCard = {
  item: DescriptionCardItem[];
};

export type DescriptionCardItem = {
  title: string;
  subtitle: string;
  picture: DescriptionCardImage;
};

export type SharedText = {
  text: string;
};


export default TypePagePracticalTrainingPropsQuery