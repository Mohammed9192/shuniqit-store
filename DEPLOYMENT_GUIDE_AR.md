# دليل النشر على الإنترنت (Vercel)

لنشر متجرك وجعله متاحاً للجميع، سنستخدم خدمة **Vercel** (الأفضل لمشاريع Next.js) و **GitHub**.

## الخطوة 1: رفع الكود إلى GitHub
1. اذهب إلى [GitHub.com](https://github.com) وأنشئ حساباً (أو سجل الدخول).
2. أنشئ "مستودع جديد" (New Repository) وسمّه `shuniqit-store`.
3. في برنامج VS Code، افتح التيرمينال واكتب الأوامر التالية (استبدل الرابط برابط مستودعك):

```bash
git remote add origin https://github.com/YOUR_USERNAME/shuniqit-store.git
git branch -M main
git push -u origin main
```
*(سيطلب منك تسجيل الدخول لـ GitHub من المتصفح، وافق عليه)*.

## الخطوة 2: النشر على Vercel
1. اذهب إلى [Vercel.com](https://vercel.com) وسجل الدخول باستخدام حساب GitHub الخاص بك.
2. اضغط على **"Add New..."** ثم **"Project"**.
3. ستظهر لك قائمة بمشاريعك على GitHub، اختر `shuniqit-store` واضغط **"Import"**.

## الخطوة 3: إعداد قاعدة البيانات (أونلاين)
بما أن Docker لا يعمل على Vercel، سنحتاج لقاعدة بيانات سحابية.
1. في صفحة إعداد المشروع على Vercel، ستجد خياراً على اليسار اسمه **Storage**.
2. اضغط عليه واختر **Create Database** ثم اختر **Postgres**.
3. وافق على الشروط واضغط **Create**.
4. سيقوم Vercel تلقائياً بإضافة متغيرات البيئة (Environment Variables) اللازمة للاتصال بقاعدة البيانات.

## الخطوة 4: إعداد المتغيرات الأخرى
في صفحة "Configure Project" قبل الضغط على Deploy، اضغط على **Environment Variables** وأضف التالي:

- **NEXTAUTH_SECRET**: اكتب أي نص عشوائي طويل ومعقد (كلمة سر للتشفير).
- **NEXTAUTH_URL**: اتركها فارغة، Vercel سيضبطها تلقائياً، أو اكتب رابط موقعك بعد النشر.

## الخطوة 5: النشر النهائي
1. اضغط على زر **Deploy**.
2. انتظر دقيقة أو دقيقتين.
3. مبروك! ستظهر لك شاشة احتفالية ورابط موقعك الجديد.

## الخطوة 6: تجهيز قاعدة البيانات الجديدة
بعد النشر، نحتاج لإنشاء الجداول في قاعدة البيانات الجديدة.
1. في لوحة تحكم Vercel، اذهب إلى تبويب **Storage**.
2. اختر قاعدة البيانات التي أنشأتها.
3. ابحث عن خيار **Query** أو **Browser**.
4. (الأفضل) يمكنك ربط مشروعك المحلي بقاعدة بيانات Vercel لتشغيل `prisma db push`، لكن هذا يتطلب خطوات إضافية.
   - *الحل الأسهل*: Vercel سيقوم بتشغيل `prisma generate` تلقائياً. لتشغيل الـ Migrations، قد تحتاج لإضافة أمر في `package.json` في خانة `build` لتصبح: `"prisma generate && prisma migrate deploy && next build"`.

### تعديل مهم قبل النشر
تأكد من تعديل ملف `package.json` ليقوم بإنشاء الجداول تلقائياً عند النشر:
غير أمر `build` إلى:
`"build": "prisma generate && prisma migrate deploy && next build"`
