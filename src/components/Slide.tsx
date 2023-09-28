import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectCoverflow, } from "swiper/modules"
import { useState, useEffect } from "react"
import type { ProductType } from "../types/types"
import { getCategoriesSingleProduct } from "../functions/products"
import { Skeleton } from "@mui/material"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { defaultProduct } from "../defaults"

const Slide = () => {
    const [products, setProducts] = useState<ProductType[]>([defaultProduct])

    useEffect(() => {
        getCategoriesSingleProduct(setProducts)
    }, [])

    console.log(products)

    return (
        <div className="">
            <h2 className="text-center font-bold text-4xl border-b-2 py-4">Categories</h2>
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                slidesPerView={'auto'}
                spaceBetween={-200}
                centeredSlides
                navigation
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 1 }}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 200,
                    modifier: 5
                }}
                className="h-96 flex items-center w-9/12"
            >
                <div className="flex items-center justify-center">
                    {products[0].id !== 0 ? products.map((p) => {
                        return (
                            <SwiperSlide className="w-1/12" key={p.id}>
                                <div className="flex justify-center items-center h-full">
                                    <h2 className="absolute font-bold text-3xl backdrop-blur-md">{p.category.toUpperCase()}</h2>
                                    <img className="h-4/6" key={p.id} src={p.image} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    }) : (
                        <SwiperSlide className="">
                            <div className="flex items-center justify-center h-full w-full flex-col">
                                <Skeleton
                                    variant="text"
                                    width={'50%'}
                                    height={30}
                                    animation='wave'
                                />
                                <Skeleton
                                    variant="rectangular"
                                    width={'70%'}
                                    height={'70%'}
                                    animation='wave'
                                />
                            </div>
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </div>
    )
}

export default Slide