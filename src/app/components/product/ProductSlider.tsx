"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const swiperOptions = {
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !size-3",
        bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500 !border-2",
    },
    modules: [Pagination]
};

export default function ProductSlider({ images }: { images: string[] }) {
    return (
        <Swiper {...swiperOptions} className='main-slider'>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image src={image}
                        alt={`${image}-${index}`}
                        loading='lazy'
                        width={500}
                        height={500}
                        className='mx-auto w-full object-contain bg-gray-300 h-[37.5rem]' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
