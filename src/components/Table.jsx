import React, { useReducer } from 'react'
import ProductList from './ProductList'
import { products } from '../products'
import { cardReducer } from '../cardReducer'
import Cart from './Cart'


export default function Table() {

    const [productState, dispatch] = useReducer(cardReducer, [])

    function handleClick(prod) {
        dispatch({ type: "add", payload: prod })
    }
    return (
        <div className='flex justify-evenly gap-[100px]'>
            <div className='flex gap-4 '>
                <div>
                    <table className='border border-collapse w-[500px] h-[300px] shadow-[0_0px_15px_rgba(0,0,0,0.5)] rounded-[4px]'>
                        <thead>
                            <tr>
                                <th>N.</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <ProductList key={product.id} name={product.name} id={product.id} price={product.price} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-[20px] h-[300px] flex flex-col justify-around'>
                    {products.map((but) => (
                        <div key={but.id}>
                            <button onClick={() => handleClick(but)} className='bg-green-600'>Add</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' shadow-[0_0px_15px_rgba(0,0,0,0.5)] rounded-[4px]'>
                <Cart productState={productState} dispatch={dispatch}/>
            </div>
        </div>
    )
}
