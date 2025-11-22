import { formatCurrency } from "@/lib/utils";
import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">نظرة عامة</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">إجمالي المبيعات</p>
                            <h3 className="mt-2 text-2xl font-bold">{formatCurrency(150000)}</h3>
                        </div>
                        <div className="rounded-full bg-green-100 p-3 text-green-600">
                            <DollarSign className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-green-600">
                        <TrendingUp className="mr-1 h-4 w-4" />
                        <span>+12% من الشهر الماضي</span>
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">الطلبات</p>
                            <h3 className="mt-2 text-2xl font-bold">1,234</h3>
                        </div>
                        <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                            <ShoppingBag className="h-6 w-6" />
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">المستخدمين</p>
                            <h3 className="mt-2 text-2xl font-bold">5,678</h3>
                        </div>
                        <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                            <Users className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-bold">آخر الطلبات</h3>
                    {/* Table placeholder */}
                    <div className="h-64 flex items-center justify-center bg-gray-50 text-gray-400">
                        جدول الطلبات
                    </div>
                </div>
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-bold">المنتجات الأكثر مبيعاً</h3>
                    {/* Chart placeholder */}
                    <div className="h-64 flex items-center justify-center bg-gray-50 text-gray-400">
                        رسم بياني
                    </div>
                </div>
            </div>
        </div>
    );
}
