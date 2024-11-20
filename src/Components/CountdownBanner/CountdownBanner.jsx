import React from 'react'
import style from './style.module.scss'
import CountdownTimer from '@Components/CountdownTimer/CountdownTimer';
import Button from '@Components/Button/Button';
const CountdownBanner = () => {
    const {container,containerTimmer,title,boxbtn} = style;
    const targetDate = '2025-12-17T00:00:00';

  return (
    <div className={container}>
        <div className={containerTimmer}>
            <CountdownTimer targetDate={targetDate} />
        </div>
        <p className={title}>The classics make a comeback</p>
        <div className={boxbtn}>
            <Button content={'Buy Now'}></Button>
        </div>
    </div>
  )
}

export default CountdownBanner