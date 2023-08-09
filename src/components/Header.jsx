import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectProduct } from '../store/slices/productSlice'

export default function Header() {
    const products = useSelector(selectProduct)
    const prod = products.filter(el => el.basketCount > 0).length
    return (
        <div className='w-full bg-gray-400 flex justify-between items-center rounded-[5px]'>
            <div>
                <Link to={""}>
                    <img src="logo.webp" className='h-[100px]' />
                </Link>

            </div>
            <div className='flex flex-col-reverse items-end'>
                <Link to={"basket"}>
                    <img src="basket-icon.png" className='h-[70px]' />
                </Link>
                <div className='bg-red-500 w-[18px] rounded-full text-white px-[10px] flex justify-center items-center'>
                    <span>{(prod > 0) ? prod : ""}</span>
                </div>
            </div>
        </div>
    )
}
