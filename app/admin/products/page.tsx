import Link from "next/link";
import prisma from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";
import { deleteProduct } from "@/app/actions/product";
import { Plus, Trash2, Edit } from "lucide-react";

export default async function AdminProductsPage() {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        include: { category: true },
    });

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">المنتجات</h1>
                <Link href="/admin/products/new" className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
                    <Plus className="h-5 w-5" />
                    إضافة منتج
                </Link>
            </div>

            <div className="rounded-xl border bg-white shadow-sm">
                <table className="w-full text-right">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-500">الاسم</th>
                            <th className="px-6 py-3 font-medium text-gray-500">الفئة</th>
                            <th className="px-6 py-3 font-medium text-gray-500">السعر</th>
                            <th className="px-6 py-3 font-medium text-gray-500">المخزون</th>
                            <th className="px-6 py-3 font-medium text-gray-500">الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-6 py-4">{product.name_ar}</td>
                                <td className="px-6 py-4">{product.category.name_ar}</td>
                                <td className="px-6 py-4">{formatCurrency(product.price_mru)}</td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="rounded p-1 text-blue-600 hover:bg-blue-50">
                                            <Edit className="h-4 w-4" />
                                        </button>
                                        <form action={deleteProduct.bind(null, product.id)}>
                                            <button className="rounded p-1 text-red-600 hover:bg-red-50">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
