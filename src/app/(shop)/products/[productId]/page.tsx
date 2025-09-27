import ProductSlider from '@/app/components/product/ProductSlider';
import { IProducts } from '@/interfaces/products.interface';
import { getProductDetails, getProducts } from '@/services/products.services';
import { Star } from 'lucide-react';
import React from 'react'
import AddToCartBtn from '../../../components/product/AddToCartBtn';
import SectionTitle from '@/app/components/shared/SectionTitle';
import ProductItem from '@/app/components/product/ProductItem';
import AddToWishlistBtn from '@/app/components/product/AddToWishlistBtn';

export default async function ProductDetails({ params: { productId } }: { params: { productId: string } }) {

    console.log(productId);

    const { data: product }: { data: IProducts } = await getProductDetails(productId);


    const { data: products }: { data: IProducts[] } = await getProducts(8, product.category._id);
    console.log(products);


    return (
        <>
            <section className='py-20'>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='lg:col-span-2'>
                            <ProductSlider images={product.images} />
                        </div>
                        <div className='lg:col-span-1'>
                            <h2 className='font-semibold text-2xl mb-4'>{product.title}</h2>
                            <div className='flex items-center gap-x-5 '>
                                <div className='flex items-center gap-x-1 mb-4'>
                                    <Star className='text-yellow-300 fill-yellow-300' />
                                    <span className='font-semibold text-sm text-gray-400'>({product.ratingsQuantity} Reviews)</span>
                                </div>
                            </div>
                            <span className='text-2xl font-medium mb-6 block'>{product.price} EGP</span>
                            <p className='text-sm border-b border-b-gray-400 pb-6 mb-6'>{product.description}</p>
                            <div className='flex gap-5 mb-10'>
                                <AddToCartBtn productId={product._id}
                                    className='grow-1'
                                    variant={'destructive'} />
                                <AddToWishlistBtn productId={product._id} variant={"outline"}/>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20'>
                <div className="container mx-auto">
                    <SectionTitle title={"Related Products"} subtitle={'Somthing you may like'} />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-16 mb-14'>
                        {
                            products
                            &&
                            products.map(product =>
                                <ProductItem key={product._id} product={product} />
                            )
                        } 
                    </div>
                </div>
            </section>
        </>

    )
}
