import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseProdCount, increaseProdCount } from '../store/slices/productSlice'

export default function Products(info) {

    const dispatch = useDispatch()
    const [initialCount] = useState(info.count)

    function decreaseCount() {
        if(initialCount > info.count ){
            dispatch(decreaseProdCount({
                id:info.id
            }))
        }
    }
    function increaseCount() {
        dispatch(increaseProdCount({
            id: info.id
        }))
    }
    return (
        <div className='shadow-[0_0px_15px_rgba(0,0,0,0.4)] w-[350px] h-[500px] flex flex-col items-center mt-[10px]'>
            <div className='mt-[10px]'>
                <img src={info.img} className='  object-cover' />
            </div>
            <div className='mt-[15px]'>
                <span>{info.description}</span>
            </div>
            <div className='w-[140px] flex justify-between mt-3' >
                <button className='bg-gray-400 w-[40px] text-white' onClick={decreaseCount} >-</button>
                <span>{info.count}</span>
                <button className='bg-gray-400 w-[40px] text-white' onClick={increaseCount} >+</button>
            </div>
            <div className='mt-[100px] ml-[260px] font-bold'>
                <span>Price:{info.price}$</span>
            </div>
        </div>
    )
}
