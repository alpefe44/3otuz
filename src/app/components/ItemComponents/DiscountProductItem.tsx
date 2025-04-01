import Image from 'next/image'
import React from 'react'
import { ShoppingCart, Heart, BaggageClaim, MoveDown, ArrowDown } from 'lucide-react'

export default function DiscountProductItem() {
    return (
        <div className='relative flex flex-col bg-white items-center justify-center p-8 gap-3 rounded-3xl hover:shadow-2xl transition-all duration-500 group'>

            <div className='absolute left-0 top-0 flex gap-2 px-3 py-3 items-center group-hover:opacity-0 transition-all duration-300'>
                <div className='flex rounded-3xl px-2 py-1 gap-1 bg-[linear-gradient(145deg,_#016fb9,_rgba(43,153,255,0.90))]'>
                    <BaggageClaim size={14} color='white' />
                    <p className='text-[10px] text-white font-bold'>TR</p>
                </div>
                <div className='flex gap-1 bg-gradient-to-r from-[#b8dbd9] to-[#b8dbd9] items-center justify-center px-2 py-1 rounded-3xl'>
                    <ArrowDown size={14} color='#1D644A' />
                    <p className='text-[10px] text-[#1D644A]'>Fiyat Düştü</p>
                </div>
            </div>

            <button className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-2 rounded-full shadow-md'>
                <Heart size={20} className="text-red-500" />
            </button>

            <Image src={"/prdctdeneme.png"} alt='product' width={130} height={130} />
            <div className='flex flex-col items-center justify-center gap-1'>
                <p className='font-extrabold text-gray-500 text-xs'>KULAKLIK</p>
                <p className='text-gray-800 font-extrabold'>Apple Airpods Pro</p>
                <p className='text-[10px] text-gray-600'>(76 Yorum)</p>

                <div className='flex flex-row justify-between w-full mt-2 items-center'>
                    <p className='font-extrabold text-gray-700'>49.999 TRY</p>
                    <button className='p-3 bg-[#04724d] rounded-3xl'>
                        <ShoppingCart size={20} color='white' />
                    </button>
                </div>
            </div>
        </div>
    )
}
