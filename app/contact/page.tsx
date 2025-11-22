export default function ContactPage() {
    return (
        <div className="container px-4 py-12 md:px-8">
            <h1 className="mb-8 text-4xl font-bold text-primary">اتصل بنا</h1>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <p className="mb-6 text-lg text-gray-600">
                        نحن هنا لمساعدتك. إذا كان لديك أي استفسار أو اقتراح، لا تتردد في التواصل معنا.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold">العنوان</h3>
                            <p>شارع المختار ولد داداه، تفرغ زينة، نواكشوط</p>
                        </div>
                        <div>
                            <h3 className="font-bold">الهاتف</h3>
                            <p>+222 12 34 56 78</p>
                        </div>
                        <div>
                            <h3 className="font-bold">البريد الإلكتروني</h3>
                            <p>support@shuniqit-store.mr</p>
                        </div>
                    </div>
                </div>

                <form className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
                    <div>
                        <label className="mb-2 block text-sm font-medium">الاسم</label>
                        <input type="text" className="w-full rounded-md border px-3 py-2" />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">البريد الإلكتروني</label>
                        <input type="email" className="w-full rounded-md border px-3 py-2" />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">الرسالة</label>
                        <textarea rows={4} className="w-full rounded-md border px-3 py-2"></textarea>
                    </div>
                    <button className="w-full rounded-md bg-primary py-2 font-bold text-white hover:bg-primary/90">
                        إرسال
                    </button>
                </form>
            </div>
        </div>
    );
}
