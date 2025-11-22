'use server';

import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addToCart(productId: string) {
    const cartId = cookies().get('cartId')?.value;

    // In a real app, we would find or create a cart in the DB
    // For now, we'll just simulate the action
    console.log(`Adding product ${productId} to cart ${cartId}`);

    revalidatePath('/cart');
}

export async function removeFromCart(itemId: string) {
    console.log(`Removing item ${itemId}`);
    revalidatePath('/cart');
}

export async function updateQuantity(itemId: string, quantity: number) {
    console.log(`Updating item ${itemId} to quantity ${quantity}`);
    revalidatePath('/cart');
}
