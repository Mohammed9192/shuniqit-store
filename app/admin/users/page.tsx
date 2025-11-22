import prisma from "@/lib/prisma";

export default async function AdminUsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">المستخدمين</h1>

            <div className="rounded-xl border bg-white shadow-sm">
                <table className="w-full text-right">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-500">الاسم</th>
                            <th className="px-6 py-3 font-medium text-gray-500">البريد الإلكتروني</th>
                            <th className="px-6 py-3 font-medium text-gray-500">الدور</th>
                            <th className="px-6 py-3 font-medium text-gray-500">تاريخ التسجيل</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded-full px-2 py-1 text-xs font-bold ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(user.createdAt).toLocaleDateString("ar-MR")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
