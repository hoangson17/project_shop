import React, { useContext } from "react";
import style from "../style.module.scss";
import { SideBarContext } from "@/Context/SideBarProvider";
const Menu = ({ content, href }) => {
  const { menu } = style;
  const {setIsOpen,setType} = useContext(SideBarContext);

  const handleCliskShowLogin = () =>{
    if(content === 'Sign in'){
      setIsOpen(true);
    }
  }

  return (
    <div className={menu} onClick={() => setIsOpen(true)}>
      {content}
    </div>
  );
};

export default Menu;
