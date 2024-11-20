import React from "react";
import MyHeader from "@Components/Header/Header";
import Banner from "@Components/Banner/Banner";
import MainLayout from "@Components/Layout/Layout";
import Info from '@Components/Info/Info'
import AdvanceHeadling from "@Components/AdvanceHeadling/AdvanceHeadling";
import style from './style.module.scss'
import HeadingListProduct from "@Components/HeadingListProduct/HeadingListProduct";
const HomePage = () => {
    const {container}= style;
  return (
    <>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info/>
        <AdvanceHeadling/>
        <HeadingListProduct/>
      </div>
    </>
  );
};

export default HomePage;
