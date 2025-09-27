"use server"
import { getUserToken } from "@/lib/server.utils";

export async function getUserWishlist() {
    try {

        const token = await getUserToken();
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishlist`, {
            headers: {
                token: token as string,
            },
        });
        const data = await res.json();
        if (!res.ok) {
            return {
                data: null,
                success: false,
                massage: data.message || "Error in Fetching Cart "
            };;
        }
        return {
            data: data,
            success: true,
            massage: data.message || "Fetched Cart successfully"
        };
        
    } catch (error) {
        console.log(error);
        return {
            data: null,
            success: false,
            massage: error as string || " Something went wrong",
        };

    }
}

export async function addToWishlist(productId: string) {
    try {

        const token = await getUserToken();
        if (!token) {
            return {
                data: null,
                success: false,
                massage: "User is not logged in",
            };
        }
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishlist`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                token: token as string,
            },
            body: JSON.stringify({productId})
        });
        const data = await res.json();
        if (!res.ok) {
           return {
            data: data,
            success: true,
            massage: data.message || "Adding to wishlist Failed"
        };
        }
        return {
            data: data,
            success: true,
            massage: data.message || "Added to wishlist successfully"
        };
    } catch (error) {
        console.log(error);
        return {
            data: null,
            success: false,
            massage: error as string || " Something went wrong",
        };

    }
}

export async function removeFromWishlist(productId: string) {
    try {

        const token = await getUserToken();
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishlist/${productId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                token: token as string,
            },
            body: JSON.stringify({productId})
        });
        const data = await res.json();
        if (!res.ok) {
           return {
            data: data,
            success: true,
            massage: data.message || "Removing from wishlist Failed"
        };
        }
        return {
            data: data,
            success: true,
            massage: data.message || "Removed from wishlist successfully"
        };

    } catch (error) {
        console.log(error);
        return {
            data: null,
            success: false,
            massage: error as string || " Something went wrong",
        };

    }
}