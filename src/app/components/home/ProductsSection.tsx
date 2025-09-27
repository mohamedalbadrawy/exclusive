import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import { getProducts } from '@/services/products.services';
import { IProducts } from '@/interfaces/products.interface';
import Link from 'next/link';
import ProductItem from '../product/ProductItem';
import { Button } from '@/components/ui/button';

export default async function ProductsSection() {

    const { data: products }: { data: IProducts } = await getProducts(8 ,"");

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
                    <Button variant={"destructive"} asChild>
                        <Link href={'/products'}>View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
