import React from 'react'

export default function Cart({ productState, dispatch }) {

    const totalPrice = productState.reduce((acc, val) => {
        return acc += val.price * val.count
    }, 0)
    function increase(product) {
        dispatch({ type: "increase", payload: product })
    }
    function decrease(product) {
        dispatch({ type: "decrease", payload: product })
    }
    function del(product) {
        dispatch({ type: "del", payload: product })
    }

    return (
        <div className='w-[700px]'>
            <h2 className='text-[40px] font-bold'>Cart</h2>
            <div>
                <table>
                    <thead>
                        <tr className='flex justify-between w-[350px] ml-[27px] '>
                            <th>Product</th>
                            <th>Count</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                productState.map((prodState) => {
                    return (
                        <div className='flex justify-between' key={prodState.id}>
                            <div className='flex justify-between items-center w-[370px] m-[20px]'  >
                                <p>{prodState.id}.{prodState.name} </p>

                                <p>{prodState.count} x {prodState.price}</p>
                                <p className='mr-[20px]'>{prodState.count * prodState.price}</p>
                            </div>
                            <div>
                                <button onClick={() => decrease(prodState)} className='bg-yellow-400'>-</button>
                                <button onClick={() => increase(prodState)} className='bg-green-400'>+</button>
                                <button onClick={() => del(prodState)} className='bg-red-400 text-white'>Del</button>
                            </div>

                        </div>
                    )
                })
            }
            <div className='ml-[500px]'>
                <p className='font-bold'>Total price - {totalPrice}</p>
            </div>
        </div>
    )
}
