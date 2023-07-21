
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineClose } from 'react-icons/md'
import { remove } from '../store/Cartslice'



const CartItem = () => {
  const item = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [baseQty, setBaseQty] = useState(0)

  const handleRemove = (item_id) => {
    dispatch(remove(item_id))
  }

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full '>
        <h2 className='font-titleFont text-2xl'>Shooping Cart</h2>
      </div>
      <div>
        {
          item.map((item) => (

            <div key={item.id} className='flex items-center justify-between gap-6 mt-6'>
              <div className='flex items-center gap-2'>
                <MdOutlineClose onClick={() => handleRemove(item.id)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                <img className='w-32 h-32 object-cover' src={item.image} alt="Product Image" />

              </div>
              <h2 className='w-52'>{item.title}</h2>
              <p className='w-10'> ${item.price}</p>
              <div>
                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                  <p className='text-sm'>Quantity</p>
                  <div className='flex items-center gap-4 text-sm font-semibold'>
                    <button onClick={() => setBaseQty((baseQty) => baseQty === 1 ? baseQty = 1 : baseQty - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                    <span>{baseQty}</span>
                    <button onClick={() => setBaseQty(baseQty + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                  </div>
                </div>
              </div>
            </div>)
          )
        }

      </div>
    </div>
  )
}

export default CartItem



