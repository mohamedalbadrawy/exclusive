"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import { ICategory } from '@/interfaces/categories.interface';



const swiperOptions = {
    spaceBetween:50,
    slidesPerView: 6,
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !size-3",
        bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500 !border-2",
    },
    modules: [Pagination]
};
export default function CategoriesSlider({ categories, }: { categories: ICategory[]; }) {
    return (
        <Swiper {...swiperOptions} className='Categories-slider mb-20'>
            {categories && categories.map((cat) => (
                <SwiperSlide key={cat._id} className='mb-8'>
                    <Image src={cat.image}
                        width={270}
                        height={250}
                        alt={cat.name}
                        loading='lazy'
                        className='w-full object-cover h-[16.625rem] bg-gray-200 mb-4' />
                        <h3 className='font-medium'>{cat.name}</h3>
                </SwiperSlide>
                
            ))}
        </Swiper>

    )
}
