import React, { useState } from "react"
import stls from '@/styles/components/filters/FilterTag.module.sass'
import classNames from "classnames";
import { useFilterDispatch } from "@/context/FilterContext/FilterContext";

interface FilterTagProps {
  children: string;
  onClick?: () => void;
  isActive: boolean
  isCategories?: boolean
}
const FilterTag = ({children, onClick, isActive, isCategories=false}:FilterTagProps) => {

  return (
    <span onClick={onClick} className={classNames({
      [stls.container]: true,
      [stls.active]: isActive,
      [stls.category]: isCategories
    })}>
      {children}
    </span>
  )
};

export default FilterTag;

