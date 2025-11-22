'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const CategorySchema = z.object({
    name_ar: z.string(),
    name_fr: z.string().optional(),
});

export async function createCategory(formData: FormData) {
    const { name_ar, name_fr } = CategorySchema.parse({
        name_ar: formData.get('name_ar'),
        name_fr: formData.get('name_fr'),
    });

    await prisma.category.create({
        data: {
            name_ar,
            name_fr,
        },
    });

    revalidatePath('/admin/categories');
}

export async function deleteCategory(id: string) {
    await prisma.category.delete({ where: { id } });
    revalidatePath('/admin/categories');
}
