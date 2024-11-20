import MainLayout from '@Components/Layout/Layout'
import style from './style.module.scss'
import React from 'react'

const AdvanceHeadling = () => {
    const {container,headline,des,title,containerMiddleBox} = style;
  return (
    <MainLayout>
        <div className={container}>
            <div className={headline}></div>
            <div className={containerMiddleBox}>
                <p className={des}>don't miss super offers</p>
                <p className={title}>Our best products</p>
            </div>
            <div className={headline}></div>
        </div>
    </MainLayout>
  )
}

export default AdvanceHeadling