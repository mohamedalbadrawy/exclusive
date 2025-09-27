import React from 'react'
import { getProducts } from '@/services/products.services';
import { IProducts } from '@/interfaces/products.interface';
import SectionTitle from '@/app/components/shared/SectionTitle';
import ProductItem from '@/app/components/product/ProductItem';

export default async function ProductsSection() {

    const { data: products }: { data: IProducts } = await getProducts(50, '');

    console.log(products);

    return (
        <section className='py-5'>
            <div className="container mx-auto">
                <SectionTitle title={"Our Products"} subtitle={'Browse By Products'} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-16 mb-14'>
                    {
                        products
                        &&
                        products.map(product => 
                          <ProductItem key={product._id} product={product} />
                        )
                    }
                </div>
                <div className='flex justify-center'>
                </div>
            </div>
        </section>
    )
}
