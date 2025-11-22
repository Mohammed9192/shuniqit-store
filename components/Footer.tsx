import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-slate-50">
            <div className="container px-4 py-8 md:px-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-bold text-primary">متجر شنقيط</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            وجهتكم الأولى للتسوق الإلكتروني في موريتانيا. جودة، ثقة، وسرعة في التوصيل.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold">روابط سريعة</h4>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li><Link href="/about">من نحن</Link></li>
                            <li><Link href="/contact">اتصل بنا</Link></li>
                            <li><Link href="/terms">الشروط والأحكام</Link></li>
                            <li><Link href="/privacy">سياسة الخصوصية</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">تواصل معنا</h4>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>نواكشوط، موريتانيا</li>
                            <li>info@shuniqit-store.mr</li>
                            <li>+222 12 34 56 78</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">النشرة البريدية</h4>
                        <p className="mt-4 text-sm text-gray-600">اشترك للحصول على آخر العروض</p>
                        <div className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="البريد الإلكتروني"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white">
                                اشتراك
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} متجر شنقيط. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
}
