import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/prisma";

export default async function SearchPage({
    searchParams,
}: {
    searchParams?: {
        q?: string;
        category?: string;
        minPrice?: string;
        maxPrice?: string;
    };
}) {
    const query = searchParams?.q || "";
    const categoryId = searchParams?.category;
    const minPrice = Number(searchParams?.minPrice) || 0;
    const maxPrice = Number(searchParams?.maxPrice) || 1000000;

    const products = await prisma.product.findMany({
        where: {
            AND: [
                {
                    OR: [
                        { name_ar: { contains: query, mode: "insensitive" } },
                        { description_ar: { contains: query, mode: "insensitive" } },
                    ],
                },
                categoryId ? { categoryId } : {},
                { price_mru: { gte: minPrice, lte: maxPrice } },
            ],
        },
        include: { category: true },
    });

    const categories = await prisma.category.findMany();

    return (
        <div className="container px-4 py-8 md:px-8">
            <h1 className="mb-8 text-3xl font-bold">نتائج البحث: "{query}"</h1>

            <div className="flex flex-col gap-8 lg:flex-row">
                {/* Filters Sidebar */}
                <aside className="w-full lg:w-64 space-y-6">
                    <div className="rounded-lg border p-4">
                        <h3 className="mb-4 font-bold">الفئات</h3>
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <label key={cat.id} className="flex items-center gap-2">
                                    <input type="radio" name="category" value={cat.id} className="h-4 w-4" />
                                    <span>{cat.name_ar}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg border p-4">
                        <h3 className="mb-4 font-bold">السعر</h3>
                        <div className="space-y-4">
                            <input type="number" placeholder="من" className="w-full rounded border p-2" />
                            <input type="number" placeholder="إلى" className="w-full rounded border p-2" />
                            <button className="w-full rounded bg-primary py-2 text-white">تصفية</button>
                        </div>
                    </div>
                </aside>

                {/* Results Grid */}
                <div className="flex-1">
                    {products.length === 0 ? (
                        <p className="text-center text-gray-500">لا توجد منتجات مطابقة للبحث.</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name_ar}
                                    price={product.price_mru}
                                    image={product.images[0]}
                                    category={product.category.name_ar}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
