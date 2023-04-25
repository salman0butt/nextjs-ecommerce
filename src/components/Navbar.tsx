import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image';
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = () => {

    const cartRef = useRef<any>(null);

    const toggleCart = () => {
        if (cartRef.current.classList.contains('translate-x-full')) {
            cartRef.current.classList.remove('translate-x-full');
            cartRef.current.classList.add('translate-x-0');
        } else if (!cartRef.current.classList.contains('translate-x-full')) {
            cartRef.current.classList.remove('translate-x-0');
            cartRef.current.classList.add('translate-x-full');
        }
    }

    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
            <div className="logo mx-5">
                <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src="/logo.png" alt="logo" width={200} height={40} />
                </Link>
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-4 font-bold md:text-md'>
                    <li><Link href={"/tshirts"}>Tshirts</Link></li>
                    <li><Link href={"/hoodies"}>Hoodies</Link></li>
                    <li><Link href={"/stickers"}>Stickers</Link></li>
                    <li><Link href={"/mugs"}>Mugs</Link></li>
                </ul>
            </div>
            <div onClick={toggleCart} className="cursor-pointer cart absolute right-0 top-4 mx-5">
                <AiOutlineShoppingCart className='text-xl md:text-2xl' />
            </div>
            <div ref={cartRef} className="w-72 h-full sideCart fixed top-0 right-0 z-50 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
                <h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
                <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle className='cursor-pointer text-pink-500' /></span>
                <ol className='list-decimal font-semibold'>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>TShirt - Wear the code</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                                <AiFillMinusCircle className='cursor-pointer text-pink-500' />
                                <span className="mx-2 text-sm">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-pink-500' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>TShirt - Wear the code</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                                <AiFillMinusCircle className='cursor-pointer text-pink-500' />
                                <span className="mx-2 text-sm">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-pink-500' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>TShirt - Wear the code</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                                <AiFillMinusCircle className='cursor-pointer text-pink-500' />
                                <span className="mx-2 text-sm">1</span>
                                <AiFillPlusCircle className='cursor-pointer text-pink-500' />
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="flex">
                    <button className='flex mx-auto text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg'><BsFillBagCheckFill className='mx-1' /> Checkout</button>
                    <button className='flex mx-auto text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg'> Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar