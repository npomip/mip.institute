import stls from '@/styles/components/general/SeminarsFilter.module.sass'
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';
import StudyFields from './StudyFields';

interface Seminar {
  studyField: string;
  studyFieldSlug: string;
  // другие поля
}

const SeminarsFilter = ({ seminars }: { seminars: Seminar[] }) => {
  const router = useRouter();

  let uniqueCategories = [...new Set(seminars?.map((seminar) => seminar.studyFieldSlug))];
  const uniqueCategoriesWithField = uniqueCategories.map((slug) => ({
    studyFieldSlug: slug,
    studyField: seminars.find((seminar) => seminar.studyFieldSlug === slug)?.studyField || ''
  }));
  const firstEl = [{studyFieldSlug: '', studyField: 'Все'}]
  // console.log(uniqueCategoriesWithField.concat({studyFieldSlug: '', studyField: 'Все'}));
  let cat = firstEl.concat(uniqueCategoriesWithField)
  // console.log(uniqueCategories)

  const [studyFieldSlug, setStudyFieldSlug] = useState({
    studyFieldSlug: router.query.studyFieldSlug || '',
    studyField: router.query.studyField || 'Все'
  });

  const handleFilter = (el) => {
    const selectedSlug = el;
    setStudyFieldSlug(selectedSlug);
    // console.log(selectedSlug)
    router.push(`/seminars/${selectedSlug.studyFieldSlug}`);
  };
// console.log(studyFieldSlug)
  return (
    <div>
      <div className={stls.container}>
        {cat?.map(el => (
          <p onClick={() => handleFilter(el)} className={classNames({
            [stls.category]: true,
            [stls.active]: el.studyFieldSlug === studyFieldSlug.studyFieldSlug
          })} key = {el.studyField}>{el.studyField}</p>
        ))}
      </div>
    </div>
  );
};

export default SeminarsFilter;
