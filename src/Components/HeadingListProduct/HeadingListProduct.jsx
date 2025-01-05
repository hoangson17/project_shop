import MainLayout from '@Components/Layout/Layout'
import style from './style.module.scss'
import React from 'react'
import CountdownBanner from '@Components/CountdownBanner/CountdownBanner'
import ProductItem from '@Components/ProductItem/ProductItem'

const HeadingListProduct = ({data}) => {
  const {container,containerItem} = style;
  // console.log(data);
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner></CountdownBanner>
        <div className={containerItem}>
          {/* cách 1 */}
          {/* {data.map((item)=>{
            return <ProductItem key={item._id} src={item.images[0]} preSrc={item.images[1]} name={item.name} price={item.price}/>
          })} */}
          {/* cách 2 */}
          {data.map((item)=>(
            <ProductItem key={item._id} src={item.images[0]} preSrc={item.images[1]} name={item.name} price={item.price}/>
          ))}
        </div>
      </div> 
     
    </MainLayout>
  )
}

export default HeadingListProduct