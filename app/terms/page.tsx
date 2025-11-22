export default function TermsPage() {
    return (
        <div className="container px-4 py-12 md:px-8">
            <h1 className="mb-8 text-4xl font-bold text-primary">الشروط والأحكام</h1>
            <div className="prose max-w-none space-y-6">
                <section>
                    <h2 className="text-2xl font-bold">1. المقدمة</h2>
                    <p>أهلاً بكم في متجر شنقيط. باستعمالكم لهذا الموقع، فإنكم توافقون على الالتزام بالشروط والأحكام التالية...</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold">2. الطلبات</h2>
                    <p>تخضع جميع الطلبات للقبول والتوافر. نحتفظ بالحق في رفض أي طلب لأي سبب من الأسباب...</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold">3. الأسعار والدفع</h2>
                    <p>جميع الأسعار المعروضة تشمل ضريبة القيمة المضافة (إن وجدت). نقبل الدفع عبر البطاقات البنكية وPayPal والدفع عند الاستلام...</p>
                </section>
            </div>
        </div>
    );
}
