
export const pStyle = "text-xl mb-4 font-bold"
export const ulStyle = "flex gap-5 flex-col"

export const socialMedia = [
    {
        name: "X",
        src: "/x.png"
    },
    {
        name: "Facebook",
        src: "/facebook.png"
    },
    {
        name: "Youtube",
        src: "/youtube.png"
    },
    {
        name: "Instagram",
        src: "/instagram.png"
    },
    {
        name: "Linkedin",
        src: "/linkedin.png"
    }
]


export const categories = [
    "Ürün",
    "Elektronik",
    "Mağazalar",
    "Bilgisayar & Ofis"
]


export type cart = {
    id: number,
    name: string,
    price: number,
    quantity: number,
    image: string
}

export const mockCart: cart[] = [
    {
        id: 1,
        name: "Apple AirPods Pro",
        price: 49999,
        quantity: 1,
        image: "/airpods-pro.png",
    },
    {
        id: 2,
        name: "Samsung Galaxy Buds 2",
        price: 29999,
        quantity: 1,
        image: "/galaxy-buds.png",
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        price: 89999,
        quantity: 1,
        image: "/sony-wh1000xm5.png",
    },
    {
        id: 4,
        name: "JBL Tune 760NC",
        price: 24999,
        quantity: 1,
        image: "/jbl-tune-760nc.png",
    },
];