import { useSelector } from 'react-redux';
import './App.css'
import Products from './components/Products';
import { selectProduct } from "./store/slices/productSlice"

function App() {
  const product = useSelector(selectProduct)
  // console.log(product);
  return (
    <div className='flex gap-3'>
      {
        product.map((prod) => {
          return (
            <div key={prod.id}>
              <Products id={prod.id} name={prod.name} img={prod.img} description={prod.description} price={prod.price} count={prod.count} basketCount={prod.basketCount}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
