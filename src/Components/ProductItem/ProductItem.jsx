import React from "react";
import style from "./style.module.scss";
import reloadIcon from "@Icons/svgs/reloadIcon.svg"
import heartIcon from "@Icons/svgs/heartIcon.svg"
import cartIcon from "@Icons/svgs/cartIcon.svg"


const ProductItem = ({src,preSrc,name,price}) => {
  const { boxImg ,showImgWhenHover,showFncWhenHover,boxIcon,title,priceCl} = style;
  return (
    <div>
      <div className={boxImg}>
        <img
          src={src}
          alt=""
        />
        <img
          src={preSrc}
          alt=""
          className={showImgWhenHover}
        />
        <div className={showFncWhenHover}>
            <div className={boxIcon} ><img src={cartIcon} alt="" /></div>
            <div className={boxIcon} ><img src={heartIcon} alt="" /></div>
            <div className={boxIcon} ><img src={reloadIcon} alt="" /></div>
            <div className={boxIcon} ><img src={cartIcon} alt="" /></div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={priceCl}>{price}</div>
    </div>
  );
};

export default ProductItem;
