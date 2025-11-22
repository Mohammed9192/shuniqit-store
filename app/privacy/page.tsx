export default function PrivacyPage() {
    return (
        <div className="container px-4 py-12 md:px-8">
            <h1 className="mb-8 text-4xl font-bold text-primary">سياسة الخصوصية</h1>
            <div className="prose max-w-none space-y-6">
                <p>نحن في متجر شنقيط نولي اهتماماً كبيراً لخصوصية زوارنا وعملائنا. توضح هذه السياسة كيفية جمعنا واستخدامنا لمعلوماتكم الشخصية.</p>
                <section>
                    <h2 className="text-2xl font-bold">جمع المعلومات</h2>
                    <p>نقوم بجمع المعلومات التي تقدمونها لنا عند التسجيل أو الشراء، مثل الاسم، العنوان، ورقم الهاتف...</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold">استخدام المعلومات</h2>
                    <p>نستخدم معلوماتكم لمعالجة الطلبات، وتحسين خدماتنا، والتواصل معكم بشأن العروض والتحديثات...</p>
                </section>
            </div>
        </div>
    );
}
