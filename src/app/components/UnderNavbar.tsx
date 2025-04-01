import React from 'react'
import KategoriMenu from './KategoriMenu'
import { categories } from '@/utils/util'


export default function UnderNavbar() {
    return (
        <div className='flex w-[1200px] items-center justify-around p-5 bg-[#00000]'>
            <KategoriMenu></KategoriMenu>
            <div className='hidden md:flex md:gap-8'>
                {
                    categories.map((item, index) => <div key={index}>
                        <p className='font-semibold text-sm'>{item}</p>
                    </div>)
                }
            </div>
        </div>
    )
}
