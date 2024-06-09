import React, { useState } from "react"
import stls from '@/styles/components/filters/FilterTag.module.sass'
import classNames from "classnames";
import { useFilterDispatch } from "@/context/FilterContext/FilterContext";

interface FilterTagProps {
  children: string;
  onClick?: () => void;
  isActive: boolean
}
const FilterTag = ({children, onClick, isActive}:FilterTagProps) => {

  return (
    <span onClick={onClick} className={classNames({
      [stls.container]: true,
      [stls.active]: isActive
    })}>
      {children}
    </span>
  )
};

export default FilterTag;

