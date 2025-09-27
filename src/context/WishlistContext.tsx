
import { IWishlistResponse } from '@/interfaces/wishlist.interface';
import { getUserWishlist } from '@/services/wishlist.services';
import React, { createContext, useContext, useEffect, useState } from 'react'

interface IWishlistContext {
    wishlistDetails: IWishlistResponse | null;
    setWishlistDetails: React.Dispatch<React.SetStateAction<IWishlistResponse | null>>;
    getWishlistDetails: () => Promise<void>;
}

const WishlistContext = createContext<IWishlistContext | null>(null)

export default function WishlistContextProvider({ children }: { children: React.ReactNode }) {

    const [wishlistDetails, setWishlistDetails] = useState<IWishlistResponse | null>(null)

    async function getWishlistDetails() {
        const {data} : {data: IWishlistResponse} = await getUserWishlist();

        setWishlistDetails(data)
    }
    useEffect(() => {
        getWishlistDetails()
    }, [])

    return (
        <WishlistContext.Provider value={{ wishlistDetails, setWishlistDetails , getWishlistDetails }}>{children}</WishlistContext.Provider>
    )
}


export function useWishlist() {
  const context =  useContext(WishlistContext)

  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context
}
