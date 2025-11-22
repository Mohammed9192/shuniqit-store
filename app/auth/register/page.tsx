import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">إنشاء حساب</h1>
                    <p className="mt-2 text-sm text-gray-600">سجل معنا للبدء في التسوق</p>
                </div>

                <form className="mt-8 space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">الاسم الكامل</label>
                        <input
                            type="text"
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="الاسم"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">البريد الإلكتروني</label>
                        <input
                            type="email"
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">كلمة المرور</label>
                        <input
                            type="password"
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full rounded-md bg-primary py-2 font-bold text-white transition hover:bg-primary/90">
                        تسجيل
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    لديك حساب بالفعل؟{" "}
                    <Link href="/auth/login" className="font-bold text-primary hover:underline">
                        تسجيل الدخول
                    </Link>
                </div>
            </div>
        </div>
    );
}
