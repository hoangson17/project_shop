import { dataInfo } from '@Components/Info/Contants'
import InfoCard from '@Components/Info/InfoCard/InfoCard'
import MainLayout from '@Components/Layout/Layout'
import React from 'react'
import style from './style.module.scss'; 

const Info = () => {
    const {container} = style;
  return (
    <>
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item)=>{
                    return <InfoCard content={item.title} des={item.description} src={item.src} />
                })}
            </div>
        </MainLayout>
    </>
  )
}

export default Info