import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, Settings } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 border-l bg-slate-900 text-white hidden md:block">
                <div className="p-6">
                    <h2 className="text-2xl font-bold">لوحة التحكم</h2>
                </div>
                <nav className="mt-6 px-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800">
                        <LayoutDashboard className="h-5 w-5" />
                        <span>الرئيسية</span>
                    </Link>
                    <Link href="/admin/products" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800">
                        <Package className="h-5 w-5" />
                        <span>المنتجات</span>
                    </Link>
                    <Link href="/admin/orders" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800">
                        <ShoppingCart className="h-5 w-5" />
                        <span>الطلبات</span>
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800">
                        <Users className="h-5 w-5" />
                        <span>المستخدمين</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800">
                        <Settings className="h-5 w-5" />
                        <span>الإعدادات</span>
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-slate-50 p-8">
                {children}
            </main>
        </div>
    );
}
