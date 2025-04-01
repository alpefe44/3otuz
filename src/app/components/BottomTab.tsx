import { Heart, House, LayoutGrid, ShoppingCart, User } from 'lucide-react'
import React from 'react'

export default function BottomTab() {
    return (
        <div className='w-full bg-[#04724D] flex justify-between p-3 items-center'>
            <div>
                <House size={32} color='white' />
            </div>
            <div>
                <LayoutGrid size={32} color='white' />
            </div>
            <div>
                <ShoppingCart size={32} color='white' />
            </div>
            <div>
                <Heart size={32} color='white' />
            </div>
            <div>
                <User size={32} color='white' />
            </div>
        </div>
    )
}
