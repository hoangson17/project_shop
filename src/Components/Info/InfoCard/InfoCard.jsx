import React from 'react'
import style from '../style.module.scss';

const InfoCard = ({content,des,src}) => {
  const {containerCard,containerContent,title,desc} = style;
  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt="truckIcon" />
      <div className={containerContent}>
        <div className={title}>{content}</div>
        <div className={desc}>{des}</div>
      </div>
    </div>
  )
}

export default InfoCard