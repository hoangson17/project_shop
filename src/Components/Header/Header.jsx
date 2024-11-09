import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./Contant.js";
import Menu from "./Menu/Menu.jsx";
import style from "./style.module.scss";
import logo from "@Icons/Images/Logo-retina.png";
import reloadIcon from "@Icons/svgs/reloadIcon.svg"
import heartIcon from "@Icons/svgs/heartIcon.svg"
import cartIcon from "@Icons/svgs/cartIcon.svg"
function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox,container } =
    style;
  return (
    <>
      <div className={container}>
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
              return <Menu key={key} content={item.content} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reloadIcon} alt="reloadIcon" />
            <img width={26} height={26} src={heartIcon} alt="heartIcon" />
            <img width={26} height={26} src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default MyHeader;
