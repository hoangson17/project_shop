import React from 'react'
import style from './style.module.scss'
import MyButton from '@Components/Button/Button';
const Banner = () => {
  const {container,content,title,desc} = style;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04 Demo</h1>
        <div className={desc}>Make yours celebrations even more special this years with beautiful.</div>
        <MyButton content={'Go to shop'} />
      </div>
    </div>
  )
}

export default Banner