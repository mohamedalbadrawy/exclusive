import { IProducts } from '@/interfaces/products.interface'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToCartBtn from './AddToCartBtn'

export default function ProductItem({ product }: { product: IProducts }) {
    return (
        <div key={product._id}>
            <picture className='relative group overflow-hidden'>
                <Link href={`/products/${product._id}`}>
                    <Image src={product.imageCover}
                        width={270}
                        height={250}
                        alt={product.title}
                        loading='lazy'
                        className='w-full object-cover h-[16.625rem] bg-gray-200 mb-4' />
                </Link>
                <AddToCartBtn productId={product._id} 
                className='w-full absolute bottom-0 translate-y-full group-hover:translate-y-0  group-hover:flex invisible group-hover:visible'>

                </AddToCartBtn>
                
            </picture>
            <h3 className='font-medium mb-2 line-clamp-1'>
                <Link href={`/products/${product._id}`}>{product.title}</Link>
            </h3>
            <div className='flex items-center gap-x-5 '>
                <span className='text-red-500 font-medium'>{product.price} EGP</span>
                <div className='flex items-center gap-x-1'>
                    <Star className='text-yellow-300 fill-yellow-300' />
                    <span className='font-semibold text-sm text-orange-500'>{product.ratingsAverage}</span>
                </div>
            </div>
        </div>)
}
