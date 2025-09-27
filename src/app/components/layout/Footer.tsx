import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-black text-neutral-300'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Exclusive / Subscribe */}
          <div>
            <h3 className='text-white text-2xl font-semibold mb-6'>Exclusive</h3>
            <p className='text-white font-medium mb-4'>Subscribe</p>
            <p className='mb-4'>Get 10% off your first order</p>
            <form className='flex items-center gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-neutral-400'
              />
              <button type='submit' aria-label='Subscribe' className='grid h-10 w-10 place-items-center rounded-md border border-neutral-700 text-white'>
                ➤
              </button>
            </form>
          </div>

          {/* Support */}
          <div>
            <h4 className='text-white font-semibold mb-6'>Support</h4>
            <div className='space-y-3 text-sm'>
              <p className='flex items-start gap-2'><MapPin size={16}/> 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p className='flex items-center gap-2'><Mail size={16}/> exclusive@gmail.com</p>
              <p className='flex items-center gap-2'><Phone size={16}/> +88015-88888-9999</p>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className='text-white font-semibold mb-6'>Account</h4>
            <ul className='space-y-3 text-sm'>
              <li><Link href='/'>My Account</Link></li>
              <li><Link href='/login'>Login / Register</Link></li>
              <li><Link href='/cart'>Cart</Link></li>
              <li><Link href='/wishlist'>Wishlist</Link></li>
              <li><Link href='/'>Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className='text-white font-semibold mb-6'>Quick Link</h4>
            <ul className='space-y-3 text-sm'>
              <li><Link href='#'>Privacy Policy</Link></li>
              <li><Link href='#'>Terms Of Use</Link></li>
              <li><Link href='#'>FAQ</Link></li>
              <li><Link href='#'>Contact</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className='text-white font-semibold mb-6'>Download App</h4>
            <p className='text-xs text-neutral-400 mb-4'>Save $3 with App New User Only</p>
              <div className='flex items-start gap-4'>
              {/* QR */}
              <div className='h-24 w-24 rounded-md border border-neutral-700 grid place-items-center text-xs text-neutral-400'>
                <Image src={'/assets/images/qr.png'} width={100} height={100} alt='QR Code' />
              </div>
              <div className='space-y-3'>
                <button className='w-36 rounded-md border border-neutral-700 px-3 py-2 text-left text-sm'>Get it on Google Play</button>
                <button className='w-36 rounded-md border border-neutral-700 px-3 py-2 text-left text-sm'>Download on App Store</button>
              </div>
            </div>
            <div className='mt-6 flex items-center gap-4 text-white'>
              <Link href='#' aria-label='Facebook' className='hover:text-neutral-400'><Facebook size={18}/></Link>
              <Link href='#' aria-label='Twitter' className='hover:text-neutral-400'><Twitter size={18}/></Link>
              <Link href='#' aria-label='Instagram' className='hover:text-neutral-400'><Instagram size={18}/></Link>
              <Link href='#' aria-label='LinkedIn' className='hover:text-neutral-400'><Linkedin size={18}/></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-neutral-800'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-center gap-2 py-6 text-sm text-neutral-400'>
            <span>© Copyright Rimel 2022. All right reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
