import React, { useEffect } from 'react'
import { STATUSES } from '../store/productSlice';
import ProductInfo from './ProductInfo'
import { fetchProduct } from '../store/productSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function Product() {

    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <>
            <div className='w-full mt-6 px-4 pt-6'>
                <h1 className='text-center'>Welcome ! Here Are The Products !!!</h1>

                <div className=' mx-[5%] py-10 grid grid-cols-4 gap-10'>
                    {
                        products.map((item, id) => {
                            return (
                                <ProductInfo key={id} product={item} />
                            )
                        })
                    }
                </div>
            </div>



        </>



    )
}
