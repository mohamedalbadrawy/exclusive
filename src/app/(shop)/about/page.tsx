import Image from 'next/image'
import React from 'react'
import about from "@/assets/images/about-img.jpg";
import tom from "@/assets/images/tom-img.png";
import emma from "@/assets/images/emma.png";
import willSmith from "@/assets/images/willSmith.png";
import { Store, Gift, DollarSign, PiggyBank, Twitter, Instagram, Linkedin, Truck, Headphones, VerifiedIcon } from 'lucide-react';


const image = [{
    path: about.src, label: 'Our Story'

}, {
    path: tom.src, label: 'tom'
}
    , {
    path: emma.src, label: 'emma'
}
    , {
    path: willSmith.src, label: 'willSmith'
}

]

export default function AboutPage() {
    return (
        <>
            <section className='py-20'>
                <div className="container mx-auto">
                    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div>
                            <h2 className='font-semibold text-4xl mb-15 '>Our Story</h2>
                            <p className='mb-5 '>Launced in 2015, Exclusive is South Asias premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                        <div>
                            <Image
                                width={705}
                                height={609}
                                src={image[0].path}
                                alt={image[0].label}
                                className='w-full object-cover '
                            />
                        </div>
                    </section>
                    <section className='py-20'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-3'>
                            {/* 1 */}
                            <div className='border rounded-md p-8 text-center '>
                                <div className=' mb-5 mt-2.5 grid place-items-center rounded-full bg-amber-50'>
                                    <Store />
                                </div>
                                <div className='text-3xl font-semibold'>10.5k</div>
                                <p className='mt-2 text-sm '>Sallers active our site</p>
                            </div>
                            {/* 2 */}
                            <div className='border rounded-md p-8 text-center '>
                                <div className=' mb-5 mt-2.5 grid place-items-center rounded-full bg-amber-50'>
                                    <DollarSign />
                                </div>
                                <div className='text-3xl font-semibold'>10.5k</div>
                                <p className='mt-2 text-sm '>Sallers active our site</p>
                            </div>
                            {/* 3 */}
                            <div className='border rounded-md p-8 text-center '>
                                <div className=' mb-5 mt-2.5 grid place-items-center rounded-full bg-amber-50'>
                                    <Gift />
                                </div>
                                <div className='text-3xl font-semibold'>10.5k</div>
                                <p className='mt-2 text-sm '>Sallers active our site</p>
                            </div>
                            {/* 3*/}
                            <div className='border rounded-md p-8 text-center '>
                                <div className=' mb-5 mt-2.5 grid place-items-center rounded-full bg-amber-50'>
                                    <PiggyBank />
                                </div>
                                <div className='text-3xl font-semibold'>10.5k</div>
                                <p className='mt-2 text-sm '>Sallers active our site</p>
                            </div>
                        </div>
                    </section>
                    <section className='py-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                            <div className='grid place-items-center'>
                                <Image
                                    src={image[1].path}
                                    alt={image[1].label}
                                    width={370}
                                    height={430}
                                    className='w-[20rem] h-[28rem] bg-gray-300 mb-5'
                                />
                                <h3 className='text-3xl'>Tom Cruise</h3>
                                <p>Founder & Chairman</p>
                                <span className='flex gap-3 mt-3'><Twitter /> <Instagram /> <Linkedin /> </span>
                            </div>
                            <div className='grid place-items-center'>
                                <Image
                                    src={image[2].path}
                                    alt={image[2].label}
                                    width={370}
                                    height={430}
                                    className='w-[20rem] h-[28rem] bg-gray-300 mb-5'
                                />
                                <h3 className='text-3xl'>Emma Watson</h3>
                                <p>Managing Director</p>
                                <span className='flex gap-3 mt-3'><Twitter /> <Instagram /> <Linkedin /> </span>
                            </div>
                            <div className='grid place-items-center'>
                                <Image
                                    src={image[3].path}
                                    alt={image[3].label}
                                    width={370}
                                    height={430}
                                    className='w-[20rem] h-[28rem] bg-gray-300 mb-5'
                                />
                                <h3 className='text-3xl'>Will Smith</h3>
                                <p>Product Designer</p>
                                <span className='flex gap-3 mt-3'><Twitter /> <Instagram /> <Linkedin /> </span>
                            </div>
                        </div>
                    </section>
                    <section className='py-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                            <div className='grid place-items-center'>
                                <div className=''>
                                    <Truck className='w-20 h-20 p-1 border-10 rounded-full bg-gray-950 border-b-gray-400 text-amber-50 ' />
                                </div>
                                <h3 className='text-xl font-semibold mt-5'>FREE AND FAST DELIVERY</h3>
                                <p>Free delivery for all orders over $140</p>
                            </div>
                            <div className='grid place-items-center'>
                                <div className=''>
                                    <Headphones className='w-20 h-20 p-1 border-10 rounded-full bg-gray-950 border-b-gray-400 text-amber-50 ' />
                                </div>
                                <h3 className='text-xl font-semibold mt-5'>24/7 CUSTOMER SERVICE</h3>
                                <p>Friendly 24/7 customer support</p>
                            </div>
                            <div className='grid place-items-center'>
                                <div className=''>
                                    <VerifiedIcon className='w-20 h-20 p-1 border-10 rounded-full bg-gray-950 border-b-gray-400 text-amber-50 ' />
                                </div>
                                <h3 className='text-xl font-semibold mt-5'>MONEY BACK GUARANTEE</h3>
                                <p>We reurn money within 30 days</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
