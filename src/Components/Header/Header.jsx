import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./Contant.js";
import Menu from "./Menu/Menu.jsx";
import style from "./style.module.scss";
import logo from "@Icons/Images/Logo-retina.png";
import reloadIcon from "@Icons/svgs/reloadIcon.svg"
import { TfiReload } from "react-icons/tfi";
import heartIcon from "@Icons/svgs/heartIcon.svg"
import { BsHeart } from "react-icons/bs";
import cartIcon from "@Icons/svgs/cartIcon.svg"
import { BsCart } from "react-icons/bs";
import useScrollHandling from "@/hooks/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/Context/SideBarProvider";
function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox,container,fixedHeader,topHeader } =
    style;

  const {scrollPosition} = useScrollHandling();
  const [fixedPosition,setFixedPossition] = useState(false);

  const {setIsOpen,setType} = useContext(SideBarContext);

  const handleOpenSidebar = (type)=>{
    setIsOpen(true);
    setType(type);
  }
  
  // console.log(isOpen);
  // console.log(scrollPosition);

  useEffect(()=>{
    // if(scrollPosition > 80 ){
    //   setFixedPossition(true);
    // }else{
    //   setFixedPossition(false);
    // }

    // setFixedPossition(scrollPosition > 80 ? true:false);
    
    setFixedPossition(scrollPosition > 80);

  },[scrollPosition])

  return (
    <>
      <div className={classNames(container,topHeader,{
        [fixedHeader]:fixedPosition
      })}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, key) => {
              return <BoxIcon key={key} types={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, key) => {
              return <Menu key={key} content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img src={logo} alt="" style={{ width: "153px", height: "53px" }} />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, 6).map((item, key) => {
              return <Menu key={key} content={item.content} href={item.href} setIsOpen={setIsOpen}/>;
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload style={{fontSize:'20px'}} onClick={()=>{handleOpenSidebar('compare')}} />
            <BsHeart style={{fontSize:'20px'}} onClick={()=>{handleOpenSidebar('wishlist')}}/>
            <BsCart style={{fontSize:'20px'}} onClick={()=>{handleOpenSidebar('cart')}}/>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default MyHeader;
