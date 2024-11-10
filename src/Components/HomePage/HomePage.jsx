import React from "react";
import MyHeader from "@Components/Header/Header";
import Banner from "@Components/Banner/Banner";
import MainLayout from "@Components/Layout/Layout";
import style from './style.module.scss'
const HomePage = () => {
    const {container}= style;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
