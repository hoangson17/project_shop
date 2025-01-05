import React, { useContext } from "react";
import style from "./style.module.scss";
import { SideBarContext } from "@/Context/SideBarProvider";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import Login from "@Components/ContentSideBar/Login/Login";

const SideBar = () => {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = style;
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div
        className={classNames({ [overlay]: isOpen })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <IoMdClose />
          </div>
        )}

        <Login/>

      </div>
    </div>
  );
};

export default SideBar;
