import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // Create Categories
    const categories = await Promise.all([
        prisma.category.create({ data: { name_ar: 'إلكترونيات', name_fr: 'Électronique' } }),
        prisma.category.create({ data: { name_ar: 'ملابس', name_fr: 'Vêtements' } }),
        prisma.category.create({ data: { name_ar: 'منزل', name_fr: 'Maison' } }),
        prisma.category.create({ data: { name_ar: 'جمال', name_fr: 'Beauté' } }),
        prisma.category.create({ data: { name_ar: 'رياضة', name_fr: 'Sport' } }),
    ])

    // Create Products
    for (let i = 1; i <= 20; i++) {
        const category = categories[i % 5]
        await prisma.product.create({
            data: {
                name_ar: `منتج ${i}`,
                name_fr: `Produit ${i}`,
                description_ar: `وصف للمنتج ${i} - جودة عالية وسعر ممتاز.`,
                description_fr: `Description du produit ${i} - Haute qualité et excellent prix.`,
                price_mru: 100 + i * 10,
                price_um: (100 + i * 10) * 10,
                stock: 50,
                sku: `SKU-${i}`,
                categoryId: category.id,
                images: ['/placeholder.png'],
            },
        })
    }

    // Create Users
    for (let i = 1; i <= 10; i++) {
        await prisma.user.create({
            data: {
                email: `user${i}@example.com`,
                name: `User ${i}`,
                password: 'password123', // In real app, hash this!
                role: i === 1 ? 'ADMIN' : 'USER',
            },
        })
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
