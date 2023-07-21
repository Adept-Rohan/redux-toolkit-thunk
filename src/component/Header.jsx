import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const item = useSelector((state) => state.cart)
    return (
        <div className='w-full h-auto px-8 pt-6 flex items-center justify-between bg-black text-white'>
            <Link to='/'><h1>Rohan Shop</h1></Link>
            <div>
                <ul className='flex items-center gap-8'>
                    <Link to='/'><li className='cursor-pointer'>
                        Home
                    </li></Link>
                    <Link to='/cart'><li className='cursor-pointer'> Cart <span>{item.length}</span>
                    </li></Link>
                </ul>
            </div>
        </div>
    )
}
