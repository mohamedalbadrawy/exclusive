import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function getDecoddedToken() {
    const encodedToken = (await cookies()).get('next-auth.session-token')?.value;

    const decodedToken = await decode({ token: encodedToken, secret: process.env.AUTH_SECRET! });
    console.log(decodedToken!.token);

    return decodedToken;
}

export async function getUserToken() {

    return ( await getDecoddedToken())?.token
}

export async function getUserId() {

    return ( await getDecoddedToken())?.sub
}