"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
    { name: "Adidas", svg: "/adidas.svg" },
    { name: "Nike", svg: "/nike.svg" },
    { name: "Puma", svg: "/puma.svg" },
    { name: "Us Polo", svg: "/us-polo.svg" },
    { name: "Adidas", svg: "/adidas.svg" },
    { name: "Nike", svg: "/nike.svg" },
    { name: "Puma", svg: "/puma.svg" },
    { name: "Us Polo", svg: "/us-polo.svg" },
    { name: "Adidas", svg: "/adidas.svg" },
    { name: "Nike", svg: "/nike.svg" },
    { name: "Adidas", svg: "/adidas.svg" },
    { name: "Nike", svg: "/nike.svg" },
    { name: "Puma", svg: "/puma.svg" },
    { name: "Us Polo", svg: "/us-polo.svg" },
    { name: "Adidas", svg: "/adidas.svg" },
    { name: "Nike", svg: "/nike.svg" },
    { name: "Puma", svg: "/puma.svg" },
    { name: "Us Polo", svg: "/us-polo.svg" },
    { name: "Adidas", svg: "/adidas.svg" },
    { name: "Nike", svg: "/nike.svg" },
];

export default function CustomSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const logoWidth = 80; // Logo genişliği + margin
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setAtStart(scrollLeft === 0);
            setAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -(logoWidth + 16), behavior: "smooth" });
            setTimeout(checkScrollPosition, 300); // Animasyon sonrası durumu güncelle
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: logoWidth + 16, behavior: "smooth" });
            setTimeout(checkScrollPosition, 300);
        }
    };

    useEffect(() => {
        checkScrollPosition();
    }, []);

    return (
        <div className="relative max-w-[1200px] mx-auto py-6 flex items-center overflow-hidden">
            {/* Sol Buton */}
            <button onClick={scrollLeft} disabled={atStart}>
                <ChevronLeft size={32} color={atStart ? "gray" : "black"} />
            </button>

            {/* Slider Alanı */}
            <div ref={sliderRef} className="flex overflow-hidden gap-4">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center shrink-0">
                        <Image src={logo.svg} alt={logo.name} width={80} height={80} />
                    </div>
                ))}
            </div>

            {/* Sağ Buton */}
            <button onClick={scrollRight} disabled={atEnd}>
                <ChevronRight size={32} color={atEnd ? "gray" : "black"} />
            </button>
        </div>
    );
}
