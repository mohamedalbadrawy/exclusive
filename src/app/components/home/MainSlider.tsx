"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from "@/assets/images/iphone-img.jpg";
import slide2 from "@/assets/images/cadbury-img.jpeg";
import slide3 from "@/assets/images/iphone-img.jpg";
import Image from 'next/image';


const swiperOptions = {
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !size-3",
        bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500 !border-2",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
        
    },
    modules: [Pagination, Autoplay]
};

const images = [{
    path: slide1.src, label: 'Slide 1'
}
    , {
    path: slide2.src, label: 'Slide 2'
}
    , {
    path: slide3.src, label: 'Slide 3'
}]

export default function MainSlider() {
    return (
        <section className='py-4'>
            <div className="container mx-auto">
                <div>
                    <Swiper {...swiperOptions} className='main-slider'>
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image src={image.path}
                                    width={1920}
                                    height={344}
                                    alt={image.label}
                                    loading='lazy'
                                    className='w-full object-cover h-[21.5rem]' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
