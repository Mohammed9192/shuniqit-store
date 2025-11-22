import { formatCurrency } from "@/lib/utils";

export default function CheckoutPage() {
    return (
        <div className="container px-4 py-8 md:px-8">
            <h1 className="mb-8 text-3xl font-bold">إتمام الطلب</h1>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Checkout Form */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Address Section */}
                    <section className="rounded-lg border p-6">
                        <h2 className="mb-4 text-xl font-bold">عنوان التوصيل</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input type="text" placeholder="الاسم الكامل" className="rounded-md border p-2" />
                            <input type="text" placeholder="رقم الهاتف" className="rounded-md border p-2" />
                            <input type="text" placeholder="المدينة" className="rounded-md border p-2" />
                            <input type="text" placeholder="العنوان بالتفصيل" className="rounded-md border p-2" />
                        </div>
                    </section>

                    {/* Payment Section */}
                    <section className="rounded-lg border p-6">
                        <h2 className="mb-4 text-xl font-bold">طريقة الدفع</h2>
                        <div className="space-y-4">
                            <label className="flex items-center gap-4 rounded-lg border p-4 cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="payment" className="h-5 w-5" defaultChecked />
                                <span className="font-medium">الدفع عند الاستلام</span>
                            </label>
                            <label className="flex items-center gap-4 rounded-lg border p-4 cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="payment" className="h-5 w-5" />
                                <span className="font-medium">بطاقة بنكية (Stripe)</span>
                            </label>
                            <label className="flex items-center gap-4 rounded-lg border p-4 cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="payment" className="h-5 w-5" />
                                <span className="font-medium">PayPal</span>
                            </label>
                        </div>
                    </section>
                </div>

                {/* Order Summary */}
                <div className="h-fit rounded-lg border bg-slate-50 p-6">
                    <h2 className="mb-4 text-lg font-bold">ملخص الطلب</h2>
                    <div className="space-y-2 border-b pb-4">
                        <div className="flex justify-between">
                            <span>المجموع الفرعي</span>
                            <span>{formatCurrency(15500)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>الشحن</span>
                            <span>مجاني</span>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between text-lg font-bold">
                        <span>الإجمالي</span>
                        <span>{formatCurrency(15500)}</span>
                    </div>
                    <button className="mt-6 block w-full rounded-lg bg-primary py-3 text-center font-bold text-white transition hover:bg-primary/90">
                        تأكيد الطلب
                    </button>
                </div>
            </div>
        </div>
    );
}
