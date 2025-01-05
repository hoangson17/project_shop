import React from 'react';
import style from "../style.module.scss";
const Menu = ({content,href,setIsOpen}) => {
  const {menu} = style;
  return (
    <div className={menu} onClick={()=>setIsOpen(true)} >{content}</div>
  )
}

export default Menu