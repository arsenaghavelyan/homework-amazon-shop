import React from 'react'

export default function BasketWithoutButton(info) {

  return (
    <div className='shadow-[0_0px_15px_rgba(0,0,0,0.4)] w-[350px] h-[500px] flex flex-col items-center mt-[10px]'>
      <div className='mt-[10px]'>
        <img src={info.img} className='object-cover' />
      </div>
      <div className='mt-[15px]'>
        <span>{info.description}</span>
      </div>
      <div className='mt-[100px] ml-[170px] font-bold'>

        <span>Price:{info.price}$ x {info.basketCount} = {info.price * info.basketCount}$ </span>
      </div>
    </div>
  )
}

