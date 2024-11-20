import MainLayout from '@Components/Layout/Layout'
import CountdownTimer from '@Components/CountdownTimer/CountdownTimer'
import style from './style.module.scss'
import React from 'react'
import CountdownBanner from '@Components/CountdownBanner/CountdownBanner'

const HeadingListProduct = () => {
  const {container,containerItem} = style;
  return (
    <MainLayout>
      {/* <CountdownTimer targetDate={targetDate} /> */}
      <div className={container}>
        <CountdownBanner></CountdownBanner>
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
     
    </MainLayout>
  )
}

export default HeadingListProduct