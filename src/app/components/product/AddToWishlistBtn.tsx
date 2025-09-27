"use client"
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext';
import { addToWishlist } from '@/services/wishlist.services';
import { Heart, LoaderCircle } from 'lucide-react';
import React, { useTransition } from 'react'
import { toast } from 'sonner';

export default function AddToWishlistBtn({ productId, ...props }: { productId: string;[key: string]: string }) {

    const [isPending, startTransition] = useTransition()
    const { getWishlistDetails } = useWishlist();

    async function addProductToWishlist(productId: string) {
        startTransition(
            async () => {
                const res = await addToWishlist(productId);
                if (res.success) {
                    toast.success(res.massage, { position: "top-center" });
                    getWishlistDetails()
                } else {
                    toast.error(res.massage, { position: "top-center" })
                }
            }

        )
    }

    return (
        <Button disabled={isPending} onClick={() => addProductToWishlist(productId)} {...props}>
            {isPending ? <LoaderCircle className='animate-spin' /> : <Heart />}
        </Button>
    )
}
