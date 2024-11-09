import React from "react";
import style from "../style.module.scss";
import fbIcon from "@Icons/svgs/fbIcon.svg";
import insIcon from "@Icons/svgs/insIcon.svg";
import ytbIcon from "@Icons/svgs/ytbIcon.svg";

const BoxIcon = ({ types, href }) => {
  const { boxIcon } = style;

  const handleRenderIcon = (types) => {
    switch(types){
      case 'fb':
        return fbIcon;
      case 'ins':
        return insIcon;
      case 'ytb':
        return ytbIcon;
    }
  }

  return <div className={boxIcon}><img src={handleRenderIcon(types)} alt={types} /></div>;
};

export default BoxIcon;
