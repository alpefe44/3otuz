"use client";

import React, { useState } from "react";
import { Menu, Computer, BrainCircuit } from "lucide-react";

const kategoriler = [
    {
        name: "Elektronik",
        icon: <Computer size={20} />,
        categories: [
            {
                name: "Bilgisayar",
                subCategories: ["Masaüstü", "Dizüstü", "Yedek Parçalar", "Deneme"],
            },
        ],
    },
    {
        name: "Makine",
        icon: <BrainCircuit size={20} />,
        categories: [
            {
                name: "Yedek Parça",
                subCategories: ["A Parçası", "B Parçası", "C Parçası", "D Parçası"],
            },
        ],
    },
];

export default function KategoriMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    function onClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative z-10">
            <button onClick={onClick} className="px-3 rounded-md flex items-center gap-2">
                <Menu size={23}></Menu>
                <span className="text-sm font-extrabold">Kategoriler</span>
            </button>

            {isOpen && (
                <div className="absolute top-10 -left-55 md:left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md flex border border-gray-200 ">
                    <div className="w-1/3 border-r border-gray-300 p-4 flex flex-col gap-2">
                        {kategoriler.map((item) => (
                            <div
                                key={item.name}
                                className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 transition-all rounded-md ${hoveredCategory === item.name ? "bg-gray-200" : ""
                                    }`}
                                onMouseEnter={() => setHoveredCategory(item.name)}
                            >
                                {item.icon}
                                {item.name}
                            </div>
                        ))}
                    </div>

                    <div className="w-2/3 p-4">
                        {hoveredCategory &&
                            kategoriler
                                .find((cat) => cat.name === hoveredCategory)
                                ?.categories.map((category) => (
                                    <div key={category.name}>
                                        <h4 className="font-semibold text-gray-700">{category.name}</h4>
                                        <ul className="mt-2 space-y-1">
                                            {category.subCategories.map((sub) => (
                                                <li key={sub} className="text-gray-600 hover:text-gray-900 cursor-pointer">
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                    </div>
                </div>
            )}
        </div>
    );
}
