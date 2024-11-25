import React, { useEffect, useState } from "react";
import MyHeader from "@Components/Header/Header";
import Banner from "@Components/Banner/Banner";
import Info from '@Components/Info/Info'
import AdvanceHeadling from "@Components/AdvanceHeadling/AdvanceHeadling";
import style from './style.module.scss'
import HeadingListProduct from "@Components/HeadingListProduct/HeadingListProduct";
import { getProducts } from "@/apis/productsService";
import PopularProduct from "@Components/PopularProduct/PopularProduct";
import SaleHomePage from "@Components/SaleHomePage/SaleHomePage";

const HomePage = () => {
  const [listProduct,setListProduct] = useState([]);

  useEffect(()=>{
    getProducts().then((res)=>{
      setListProduct(res.contents);
    })
  },[]);


  return (
    <>
        <MyHeader />
        <Banner />
        <Info/>
        <AdvanceHeadling/>
        <HeadingListProduct data={listProduct.slice(0,2)} />
        <PopularProduct data={listProduct.slice(2,listProduct.length)} />
        <SaleHomePage/>
        <div style={{height:`300px`}}></div>
    </>
  );
};

export default HomePage;
