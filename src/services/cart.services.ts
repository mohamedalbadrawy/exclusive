"use server"
import { getUserToken } from "@/lib/server.utils";
export async function getUserCart() {
    try {

        const token = await getUserToken();
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart`, {
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
export async function removeUserCart() {
    try {

        const token = await getUserToken();
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart`, {
            method: "DELETE",
            headers: {
                token: token as string,
            },
        });
        const data = await res.json();
        if (!res.ok) {
           return {
            data: data,
            success: true,
            massage: data.message || "Error in Removing Cart "
        };
        }
        return {
            data: data,
            success: true,
            massage: data.message || "Removed Cart successfully"
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
export async function addToCart(productId: string) {
    try {

        const token = await getUserToken();
        if (!token) {
            return {
                data: null,
                success: false,
                massage: "User is not logged in",
            };
        }
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart`, {
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
            massage: data.message || "Adding to Cart Failed"
        };
        }
        return {
            data: data,
            success: true,
            massage: data.message || "Added to Cart successfully"
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
export async function removeFromCart(productId: string) {
    try {

        const token = await getUserToken();
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart/${productId}`, {
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
            massage: data.message || "Removing from Cart Failed"
        };
        }
        return {
            data: data,
            success: true,
            massage: data.message || "Removed from Cart successfully"
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
export async function updateQtyCart(productId: string , count: number) {
    try {

        const token = await getUserToken();
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart/${productId}`, {
            cache: "no-store",
            method: "PUT",
            headers: {
                "content-type": "application/json",
                token: token as string,
            },
            body: JSON.stringify({count})
        });
        const data = await res.json();
        if (!res.ok) {
           return {
            data: data,
            success: true,
            massage: data.message || "Updating quantity in Cart Failed"
        };
        }
        return {
            data: data,
            success: true,
            massage: data.message || "Updated quantity in Cart successfully"
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

