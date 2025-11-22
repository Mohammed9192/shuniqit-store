'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const OrderSchema = z.object({
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    paymentMethod: z.string(),
});

export async function createOrder(formData: FormData) {
    const data = OrderSchema.parse({
        name: formData.get('name'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        city: formData.get('city'),
        paymentMethod: formData.get('paymentMethod'),
    });

    // Create order in DB
    const order = await prisma.order.create({
        data: {
            total: 15500, // Mock total
            status: 'PENDING',
            // In real app, connect user and items
        },
    });

    redirect(`/orders/${order.id}`);
}
