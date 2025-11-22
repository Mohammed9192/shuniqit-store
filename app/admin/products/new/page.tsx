import prisma from "@/lib/prisma";
import { createProduct } from "@/app/actions/product";

export default async function NewProductPage() {
    const categories = await prisma.category.findMany();

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="mb-8 text-3xl font-bold">إضافة منتج جديد</h1>

            <form action={createProduct} className="space-y-6 rounded-xl border bg-white p-8 shadow-sm">
                <div>
                    <label className="mb-2 block text-sm font-medium">اسم المنتج (عربي)</label>
                    <input name="name_ar" required className="w-full rounded-md border px-3 py-2" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">الوصف (عربي)</label>
                    <textarea name="description_ar" required rows={4} className="w-full rounded-md border px-3 py-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium">السعر (MRU)</label>
                        <input name="price_mru" type="number" step="0.01" required className="w-full rounded-md border px-3 py-2" />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">المخزون</label>
                        <input name="stock" type="number" required className="w-full rounded-md border px-3 py-2" />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">الفئة</label>
                    <select name="categoryId" required className="w-full rounded-md border px-3 py-2">
                        <option value="">اختر فئة...</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name_ar}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="w-full rounded-md bg-primary py-3 font-bold text-white hover:bg-primary/90">
                    حفظ المنتج
                </button>
            </form>
        </div>
    );
}
