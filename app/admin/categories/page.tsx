import prisma from "@/lib/prisma";
import { createCategory, deleteCategory } from "@/app/actions/category";
import { Trash2 } from "lucide-react";

export default async function AdminCategoriesPage() {
    const categories = await prisma.category.findMany();

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* List Categories */}
            <div>
                <h1 className="mb-8 text-3xl font-bold">الفئات</h1>
                <div className="rounded-xl border bg-white shadow-sm">
                    <ul className="divide-y">
                        {categories.map((cat) => (
                            <li key={cat.id} className="flex items-center justify-between p-4">
                                <div>
                                    <p className="font-bold">{cat.name_ar}</p>
                                    <p className="text-sm text-gray-500">{cat.name_fr}</p>
                                </div>
                                <form action={deleteCategory.bind(null, cat.id)}>
                                    <button className="rounded p-1 text-red-600 hover:bg-red-50">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </form>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Create Category */}
            <div>
                <h2 className="mb-8 text-2xl font-bold">إضافة فئة جديدة</h2>
                <form action={createCategory} className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
                    <div>
                        <label className="mb-2 block text-sm font-medium">الاسم (عربي)</label>
                        <input name="name_ar" required className="w-full rounded-md border px-3 py-2" />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">الاسم (فرنسي)</label>
                        <input name="name_fr" className="w-full rounded-md border px-3 py-2" />
                    </div>
                    <button className="w-full rounded-md bg-primary py-2 font-bold text-white hover:bg-primary/90">
                        إضافة
                    </button>
                </form>
            </div>
        </div>
    );
}
