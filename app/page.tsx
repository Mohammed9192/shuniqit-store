import ProductCard from "@/components/ProductCard";

// Mock data for now
const FEATURED_PRODUCTS = [
    { id: "1", name: "هاتف ذكي حديث", price: 12000, image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", category: "إلكترونيات" },
    { id: "2", name: "ساعة يد فاخرة", price: 3500, image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", category: "إكسسوارات" },
    { id: "3", name: "حذاء رياضي مريح", price: 2500, image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", category: "ملابس" },
    { id: "4", name: "سماعات بلوتوث", price: 1500, image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", category: "إلكترونيات" },
];

export default function Home() {
    return (
        <div className="flex flex-col gap-12 pb-12">
            {/* Hero Section */}
            <section className="relative h-[500px] w-full overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 bg-black/40" />
                <div className="container relative flex h-full flex-col justify-center px-4 md:px-8">
                    <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                        تسوق بذكاء <br />
                        <span className="text-secondary">مع متجر شنقيط</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-gray-200">
                        اكتشف أفضل المنتجات بأفضل الأسعار في موريتانيا. توصيل سريع وخدمة عملاء متميزة.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <button className="rounded-full bg-secondary px-8 py-3 font-bold text-white transition hover:bg-secondary/90">
                            تسوق الآن
                        </button>
                        <button className="rounded-full border border-white px-8 py-3 font-bold text-white transition hover:bg-white/10">
                            تصفح الفئات
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container px-4 md:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-primary">منتجات مميزة</h2>
                    <a href="/products" className="text-secondary hover:underline">عرض الكل</a>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="container px-4 md:px-8">
                <h2 className="mb-8 text-3xl font-bold text-primary">تسوق حسب الفئة</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {['إلكترونيات', 'ملابس', 'منزل', 'جمال'].map((cat) => (
                        <div key={cat} className="flex h-32 cursor-pointer items-center justify-center rounded-xl bg-slate-100 text-xl font-bold text-slate-700 transition hover:bg-slate-200 hover:shadow-lg">
                            {cat}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
