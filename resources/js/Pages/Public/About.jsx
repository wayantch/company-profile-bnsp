import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function About({ about, visiMisi }) {
    const missionItems = String(visiMisi?.misi || "")
        .split("\n")
        .map((item) => item.replace(/^\d+\.\s*/, "").trim())
        .filter(Boolean);

    return (
        <PublicLayout title="Tentang">
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-primary">
                                Tentang Wynnsea
                            </p>
                            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
                                {about?.title || "Tentang Wynnsea"}
                            </h1>
                            <p className="max-w-2xl text-base leading-8 text-muted">
                                {about?.description ||
                                    "Wynnsea adalah mitra transformasi digital yang fokus pada produk, pengalaman, dan hasil yang terukur."}
                            </p>
                            <p className="max-w-2xl text-sm leading-7 text-muted/80">
                                Kami membangun solusi yang memadukan strategi
                                bisnis, desain yang rapi, dan implementasi
                                teknologi yang stabil.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href={route("produk")}
                                    className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    Lihat Produk
                                </Link>
                                <Link
                                    href={route("kontak")}
                                    className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text transition hover:bg-secondary/70"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4 rounded-3xl border border-border bg-surface/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm">
                            <div className="rounded-2xl border border-border bg-base p-5">
                                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                                    Sejarah
                                </p>
                                <h2 className="mt-3 text-2xl font-semibold text-text">
                                    {about?.history_title ||
                                        "Sejarah Perjalanan Kami"}
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Dari ide kecil hingga tim lintas disiplin,
                                    Wynnsea berkembang dengan fokus pada solusi
                                    yang dapat dipakai nyata.
                                </p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-border bg-base p-4">
                                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                        Fokus
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-text">
                                        Web, mobile, dan konsultasi IT
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-border bg-base p-4">
                                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                        Pendekatan
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-text">
                                        Praktis, cepat, dan terukur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border bg-secondary/35">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        Visi & Misi
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-text sm:text-4xl">
                        Arahan utama perusahaan dalam satu halaman
                    </h2>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <article className="rounded-3xl border border-border bg-surface/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Visi
                            </p>
                            <p className="mt-4 text-lg leading-8 text-text">
                                {visiMisi?.visi ||
                                    "Menjadi pemimpin solusi teknologi yang inovatif dan tepercaya."}
                            </p>
                        </article>

                        <article className="rounded-3xl border border-border bg-surface/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Misi
                            </p>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                                {(missionItems.length
                                    ? missionItems
                                    : [
                                          "Memberikan solusi berkualitas tinggi.",
                                          "Menyediakan konsultasi strategis.",
                                          "Membangun infrastruktur modern.",
                                          "Menjaga integritas dan profesionalisme.",
                                      ]
                                ).map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
