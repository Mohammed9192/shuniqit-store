import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { Star, ShoppingCart } from "lucide-react";

// Mock data
const PRODUCT = {
    id: "1",
    name: "هاتف ذكي حديث",
    description: "هاتف ذكي بمواصفات عالية وكاميرا ممتازة. يدعم شبكات الجيل الخامس وبطارية تدوم طويلاً.",
    price: 12000,
    images: ["https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"],
    category: "إلكترونيات",
    rating: 4.5,
    reviews: 12,
    stock: 5,
};

export default function ProductPage({ params }: { params: { id: string } }) {
    return (
        <div className="container px-4 py-8 md:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Image Gallery */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={PRODUCT.images[0]}
                        alt={PRODUCT.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-sm text-muted-foreground">{PRODUCT.category}</p>
                        <h1 className="mt-2 text-3xl font-bold text-gray-900">{PRODUCT.name}</h1>
                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < Math.floor(PRODUCT.rating) ? "fill-current" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">({PRODUCT.reviews} تقييم)</span>
                        </div>
                    </div>

                    <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-bold text-primary">{formatCurrency(PRODUCT.price)}</span>
                        <span className="text-lg text-muted-foreground">{formatCurrency(PRODUCT.price * 10, 'UM')}</span>
                    </div>

                    <p className="text-gray-600">{PRODUCT.description}</p>

                    <div className="flex gap-4">
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary/90">
                            <ShoppingCart className="h-5 w-5" />
                            إضافة للسلة
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 border-t pt-8">
                        <h3 className="mb-4 text-lg font-bold">المواصفات</h3>
                        <ul className="list-inside list-disc space-y-2 text-gray-600">
                            <li>ضمان لمدة سنة</li>
                            <li>توصيل مجاني في نواكشوط</li>
                            <li>الدفع عند الاستلام متاح</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
