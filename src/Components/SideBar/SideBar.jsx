import React, { useContext } from "react";
import style from "./style.module.scss";
import { SideBarContext } from "@/Context/SideBarProvider";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import Login from "@Components/ContentSideBar/Login/Login";

const SideBar = () => {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = style;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContext = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return 'compare';
      case 'wishlist':
        return 'wishlist';
      case 'cart':
        return 'cart';
      default:
        return <Login />;
    }
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

        {handleRenderContext()}
      </div>
    </div>
  );
};

export default SideBar;
