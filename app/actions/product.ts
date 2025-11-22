'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ProductSchema = z.object({
    id: z.string(),
    name_ar: z.string(),
    description_ar: z.string(),
    price_mru: z.coerce.number(),
    categoryId: z.string(),
    stock: z.coerce.number(),
});

const CreateProduct = ProductSchema.omit({ id: true });

export async function createProduct(formData: FormData) {
    const { name_ar, description_ar, price_mru, categoryId, stock } = CreateProduct.parse({
        name_ar: formData.get('name_ar'),
        description_ar: formData.get('description_ar'),
        price_mru: formData.get('price_mru'),
        categoryId: formData.get('categoryId'),
        stock: formData.get('stock'),
    });

    const price_um = price_mru * 10;
    const sku = `SKU-${Date.now()}`; // Simple SKU generation

    await prisma.product.create({
        data: {
            name_ar,
            description_ar,
            price_mru,
            price_um,
            categoryId,
            stock,
            sku,
            images: ['/placeholder.png'], // Default image for now
        },
    });

    revalidatePath('/admin/products');
    redirect('/admin/products');
}

export async function deleteProduct(id: string) {
    await prisma.product.delete({ where: { id } });
    revalidatePath('/admin/products');
}
