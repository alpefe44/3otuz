"use client"

import React, { useState } from 'react'
import { Search, ShoppingBasket, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import LanguageMenu from './LanguageMenu'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

export default function Navbar() {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const cart = useSelector((state: RootState) => state.cart)

    return (
        <nav className="flex justify-between items-center w-[100%] md:max-w-[1200px] mx-auto p-4  ">
            {/* Logo */}
            <div className='hidden md:block'>
                <Image src={"/logo.png"} width={130} height={130} alt='a' />
            </div>

            {/* Arama Çubuğu */}
            <div className="relative w-full md:w-[50%]">
                <input
                    className="bg-gray-100 w-full md:p-3 pl-12 rounded-3xl p-2"
                    placeholder="Ürün veya Markayı Yazınız..."
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#04724d] md:p-3 rounded-3xl p-2">
                    <Search color="white" />
                </button>
            </div>

            {/* Sağ Taraf: Sepet, Giriş Butonu, Dil Seçimi */}
            <div className="md:flex items-center gap-5 hidden">
                {/* Sepet */}
                <div
                    className="relative flex items-center gap-2"
                    onMouseEnter={() => setIsCartOpen(true)} // Hover olduğunda sepeti aç
                    onMouseLeave={() => setIsCartOpen(false)} // Hoverdan çıktığında sepeti kapat
                >
                    <ShoppingBasket />
                    <div className={`absolute z-10 right-0 left-3 top-10 mt-2 w-64 bg-white p-4 rounded-lg shadow-md transition-all duration-600 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Sepet İçeriği */}
                        <h3 className="font-bold mb-2 border-b-2 text-center">Sepetiniz</h3>
                        <ul className='flex flex-col'>
                            {
                                cart.card.map((item) => <li className='flex relative' key={item.id}>
                                    <p>{item.name}</p>
                                    <p className='absolute right-2'>{item.quantity} Adet</p>
                                </li>)
                            }
                        </ul>
                        <div className="flex mt-4 items-center justify-between">
                            <span className='font-bold'> {(cart.totalPrice).toLocaleString()} TRY</span>
                            <button className="bg-[#04724d] text-white rounded-3xl px-2 py-1"><ShoppingBasket color='white'></ShoppingBasket></button>
                        </div>
                    </div>
                </div>
                {/* Giriş Yap Butonu */}
                <div className="hidden md:flex bg-[#04724d] items-center px-4 py-2 rounded-xl w-[135px] h-[40px] gap-2">
                    <User size={25} color="white" />
                    <div className="flex flex-col text-white text-[12px]">
                        <span>GİRİŞ YAP</span>
                        <span className="text-[10px]">veya kayıt ol</span>
                    </div>
                </div>

                {/* Dil Seçimi */}
                <div className='sm:ml-5 md:block'>
                    <LanguageMenu />
                </div>
            </div>
        </nav>

    )
}
