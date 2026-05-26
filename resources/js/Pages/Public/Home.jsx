import { Head, Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Home({
    hero,
    featuredProducts,
    latestArticles,
    clients,
    stats,
}) {
    const heroTitle = hero?.title || "Bringing Ideas to Digital Reality";
    const heroSubtitle =
        hero?.subtitle ||
        "Solusi digital yang dirancang untuk tumbuh, cepat, dan tepercaya.";
    const heroDescription =
        hero?.description ||
        "Kami membantu perusahaan membangun kehadiran digital yang rapi, modern, dan siap berkembang bersama kebutuhan bisnis.";

    return (
        <PublicLayout title="Home">
            <Head title="Home | Wynnsea" />

            <section className="relative overflow-hidden border-b border-[#1E293B] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_30%),linear-gradient(180deg,#0A0F1E_0%,#0D1326_100%)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-cyan-200">
                                Wynnsea Company Profile
                            </div>
                            <div className="space-y-5">
                                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                    {heroTitle}
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                                    {heroSubtitle}
                                </p>
                                <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                                    {heroDescription}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href={route("kontak")}
                                    className="rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:opacity-90"
                                >
                                    Hubungi Kami
                                </Link>
                                <Link
                                    href={route("produk")}
                                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                                >
                                    Lihat Produk
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {Object.entries(stats || {}).map(
                                    ([label, value]) => (
                                        <div
                                            key={label}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                                        >
                                            <div className="text-2xl font-semibold text-white">
                                                {value}
                                            </div>
                                            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                                                {label}
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="grid gap-4 rounded-3xl border border-white/10 bg-[#111827]/70 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur">
                            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                                    Featured Focus
                                </p>
                                <h2 className="mt-3 text-2xl font-semibold text-white">
                                    Strategi, produk, dan konten yang saling
                                    terhubung.
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Setiap bagian halaman ini dirancang untuk
                                    membantu pengunjung memahami nilai, bukti,
                                    dan langkah berikutnya dengan cepat.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                        Products
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        {featuredProducts?.length || 0} pilihan
                                        unggulan
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                        Articles
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        {latestArticles?.length || 0} artikel
                                        terbaru
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#1E293B] bg-[#0D1326]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                                        Produk Unggulan
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold text-white">
                                        Fokus pada solusi yang paling siap
                                        dipakai
                                    </h2>
                                </div>
                                <Link
                                    href={route("produk")}
                                    className="text-sm text-cyan-300 hover:text-cyan-200"
                                >
                                    Semua produk
                                </Link>
                            </div>

                            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {(featuredProducts || []).map((product) => (
                                    <article
                                        key={product.id}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                    >
                                        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                            {product.category || "Product"}
                                        </p>
                                        <h3 className="mt-3 text-lg font-semibold text-white">
                                            {product.name}
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            {product.description ||
                                                "Produk yang dirancang untuk mendukung kebutuhan operasional dan pertumbuhan digital."}
                                        </p>
                                    </article>
                                ))}
                                {!featuredProducts?.length && (
                                    <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-5 text-sm text-slate-400 md:col-span-2 xl:col-span-3">
                                        Produk unggulan belum tersedia.
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                                Klien Kami
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold text-white">
                                Dipercaya oleh berbagai tim
                            </h2>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {(clients || []).slice(0, 6).map((client) => (
                                    <div
                                        key={client.id}
                                        className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-slate-300"
                                    >
                                        {client.name}
                                    </div>
                                ))}
                                {!clients?.length && (
                                    <div className="col-span-2 rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-6 text-sm text-slate-400">
                                        Belum ada data klien.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                                Artikel Terbaru
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold text-white">
                                Wawasan yang relevan untuk tim Anda
                            </h2>
                        </div>
                        <Link
                            href={route("articles.index")}
                            className="text-sm text-cyan-300 hover:text-cyan-200"
                        >
                            Semua artikel
                        </Link>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {(latestArticles || []).map((article) => (
                            <article
                                key={article.id}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                            >
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                    {article.published_at || "Insight"}
                                </p>
                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    {article.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    {article.excerpt ||
                                        "Artikel terbaru untuk membantu Anda mengikuti perkembangan digital."}
                                </p>
                            </article>
                        ))}
                        {!latestArticles?.length && (
                            <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-5 text-sm text-slate-400 md:col-span-2 xl:col-span-3">
                                Belum ada artikel terbaru.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
