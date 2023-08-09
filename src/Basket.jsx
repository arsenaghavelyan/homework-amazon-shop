import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onClickFN, selectBasket } from './store/slices/basketSlice'
import { selectProduct } from './store/slices/productSlice'
import BasketWithoutButton from './components/BasketWithoutButton'

export default function Basket() {
    const productsFromProdSlice = useSelector(selectProduct)
    const productsFilter = productsFromProdSlice.filter((el) => el.basketCount > 0)
    const dispatch = useDispatch()

    dispatch(onClickFN({
        productsFilter
    }))

    const productsFromBasketSlice = useSelector(selectBasket)
    // console.log(productsFromBasketSlice[0]);
    
    return (
        <div>
            {
                productsFromBasketSlice.map((el) => {
                    return (
                        <div key={el.id}>
                            <BasketWithoutButton id={el.id} name={el.name} img={el.img} description={el.description} price={el.price} basketCount={el.basketCount} />
                        </div>
                    )
                })
            }
        </div>
    )
}
