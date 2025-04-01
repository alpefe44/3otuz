import Image from 'next/image'
import React from 'react'
import { ShoppingCart, Heart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addCart } from '@/features/cartSlice'

export default function ProductItem() {
    const dispatch = useDispatch();

    // Ürünü sepete eklemek için fonksiyon
    const handleAddToCart = () => {
        const product = {
            id: 1, // Ürün ID'sini burada belirleyebilirsiniz
            name: 'Apple Airpods Pro',
            price: 49999,
            quantity: 1, // Varsayılan miktar
            image : ""
        };
        
        dispatch(addCart(product)); // Sepete ürün ekle
        console.log("eklendi")
    };

    return (
        <div className='relative flex flex-col bg-white items-center justify-center p-8 gap-3 rounded-3xl hover:shadow-2xl transition-all duration-500 group'>
            {/* Favori butonu */}
            <button className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-2 rounded-full shadow-md'>
                <Heart size={20} className="text-red-500" />
            </button>

            {/* Ürün resmi */}
            <Image src={"/prdctdeneme.png"} alt='product' width={130} height={130} />

            <div className='flex flex-col items-center justify-center gap-1'>
                <p className='font-extrabold text-gray-500 text-xs'>KULAKLIK</p>
                <p className='text-gray-800 font-extrabold'>Apple Airpods Pro</p>
                <p className='text-[10px] text-gray-600'>(76 Yorum)</p>

                {/* Fiyat ve sepete ekle butonu */}
                <div className='flex flex-row justify-between w-full mt-2 items-center'>
                    <p className='font-extrabold text-gray-700'>49.999 TRY</p>
                    <button 
                        className='p-3 bg-[#04724d] rounded-3xl'
                        onClick={handleAddToCart} // Sepete ekle butonuna tıklandığında fonksiyonu çalıştır
                    >
                        <ShoppingCart size={20} color='white' />
                    </button>
                </div>
            </div>
        </div>
    );
}
