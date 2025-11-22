import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Trash2, Plus, Minus } from "lucide-react";

// Mock Cart Items
const CART_ITEMS = [
    { id: "1", name: "هاتف ذكي حديث", price: 12000, image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", quantity: 1 },
    { id: "2", name: "ساعة يد فاخرة", price: 3500, image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", quantity: 2 },
];

export default function CartPage() {
    const total = CART_ITEMS.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container px-4 py-8 md:px-8">
            <h1 className="mb-8 text-3xl font-bold">سلة التسوق</h1>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {CART_ITEMS.map((item) => (
                        <div key={item.id} className="flex gap-4 rounded-lg border p-4">
                            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="flex justify-between">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="font-bold">{formatCurrency(item.price)}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 rounded-md border p-1">
                                        <button className="p-1 hover:bg-gray-100 rounded"><Minus className="h-4 w-4" /></button>
                                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                                        <button className="p-1 hover:bg-gray-100 rounded"><Plus className="h-4 w-4" /></button>
                                    </div>
                                    <button className="text-red-500 hover:text-red-600">
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="h-fit rounded-lg border bg-slate-50 p-6">
                    <h2 className="mb-4 text-lg font-bold">ملخص الطلب</h2>
                    <div className="space-y-2 border-b pb-4">
                        <div className="flex justify-between">
                            <span>المجموع الفرعي</span>
                            <span>{formatCurrency(total)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>الشحن</span>
                            <span>مجاني</span>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between text-lg font-bold">
                        <span>الإجمالي</span>
                        <span>{formatCurrency(total)}</span>
                    </div>
                    <Link href="/checkout" className="mt-6 block w-full rounded-lg bg-primary py-3 text-center font-bold text-white transition hover:bg-primary/90">
                        إتمام الطلب
                    </Link>
                </div>
            </div>
        </div>
    );
}
