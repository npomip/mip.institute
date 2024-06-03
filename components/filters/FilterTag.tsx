import React from "react"
import stls from '@/styles/components/filters/FilterTag.module.sass'
import classNames from "classnames";

interface FilterTagProps {
  children: string;
}
const FilterTag = ({children}:FilterTagProps) => {
  return (
    <span className={classNames({
      [stls.container]: true,
      // [stls.active]: el.studyFieldSlug === selectedField.studyFieldSlug
    })}>
      {children}
    </span>
  )
};

export default FilterTag;

