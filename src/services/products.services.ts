
export  async function getProducts(limit = 50 , categoryId : string) {
    try {

        const endpoint = categoryId 
        ? `limit=${limit}&category[in]=${categoryId}`
        : `limit=${limit}`

        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/products?${endpoint}`);

        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return { error };

    }

}



export async function getProductDetails(id: string) {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return { error };

    }

}