import { pStyle, socialMedia, ulStyle } from '@/utils/util'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'

export default function Footer() {
    return (
        <div className='bg-white my-5 mx-5 rounded-xl p-6 md:p-10 flex flex-col md:flex-row justify-around items-center md:items-start text-center md:text-left'>
            <div className='w-full md:w-[360px] flex flex-col gap-5'>
                <p className='text-justify text-xl font-serif'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa accusamus similique aliquid harum nemo error voluptate ratione ab saepe.
                </p>
                <div className='flex justify-center md:justify-start gap-2'>
                    {socialMedia.map((item, index) => (
                        <div key={index}>
                            <Image src={item.src} alt={item.name} width={25} height={25} />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Link Bölümü */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-0'>
                <div>
                    <p className={pStyle}>Hızlı Linkler</p>
                    <ul className={ulStyle}>
                        <li>Anasayfa</li>
                        <li>Hakkımızda</li>
                        <li>Hizmetlerimiz</li>
                        <li>Satış Yap</li>
                        <li>Şartlar ve Koşullar</li>
                        <li>Mağazalar</li>
                        <li>Markalarımız</li>
                        <li>Emlak</li>
                    </ul>
                </div>
                <div>
                    <p className={pStyle}>Kategoriler</p>
                    <ul className={ulStyle}>
                        <li>Otomotiv</li>
                        <li>Telefon</li>
                        <li>Tablet</li>
                        <li>Bilgisayar & Ofis</li>
                    </ul>
                </div>
                <div>
                    <p className={pStyle}>Kaynaklar</p>
                    <ul className={ulStyle}>
                        <li>Ekibimiz</li>
                        <li>Kariyer</li>
                        <li>Gizlilik Politikası</li>
                        <li>Biz Kimiz</li>
                    </ul>
                </div>
                <div>
                    <p className={pStyle}>Yardım</p>
                    <ul className={ulStyle}>
                        <li>Yardım</li>
                        <li>Sıkça Sorulan Sorular</li>
                        <li>İletişim</li>
                        <li className='w-full md:w-50'>
                            Hemen bir mağaza oluşturarak satışa başlayın{" "}
                            <span className='text-[#04724D]'>Mağaza oluştur.</span>
                        </li>
                        <li className='flex flex-col mt-4 md:mt-10'>
                            <span className='font-bold text-md'>+90 212 222 22 22</span>
                            <span className='text-sm text-gray-500'>support@siteniz.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
