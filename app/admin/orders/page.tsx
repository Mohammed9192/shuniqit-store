import prisma from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";
import { updateOrderStatus } from "@/app/actions/order";

export default async function AdminOrdersPage() {
    const orders = await prisma.order.findMany({
        orderBy: { createdAt: "desc" },
        include: { user: true },
    });

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">الطلبات</h1>

            <div className="rounded-xl border bg-white shadow-sm">
                <table className="w-full text-right">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-500">رقم الطلب</th>
                            <th className="px-6 py-3 font-medium text-gray-500">العميل</th>
                            <th className="px-6 py-3 font-medium text-gray-500">المجموع</th>
                            <th className="px-6 py-3 font-medium text-gray-500">الحالة</th>
                            <th className="px-6 py-3 font-medium text-gray-500">التاريخ</th>
                            <th className="px-6 py-3 font-medium text-gray-500">الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 font-mono text-sm">{order.id.slice(-6)}</td>
                                <td className="px-6 py-4">{order.user?.name || "زائر"}</td>
                                <td className="px-6 py-4">{formatCurrency(order.total)}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded-full px-2 py-1 text-xs font-bold ${order.status === 'PAID' ? 'bg-green-100 text-green-800' :
                                            order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-gray-100 text-gray-800'
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(order.createdAt).toLocaleDateString("ar-MR")}
                                </td>
                                <td className="px-6 py-4">
                                    <form action={updateOrderStatus.bind(null, order.id, "SHIPPED")}>
                                        <button className="text-sm text-blue-600 hover:underline">شحن</button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
