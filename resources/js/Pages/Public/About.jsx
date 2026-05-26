import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function About({ about }) {
    return (
        <PublicLayout title="About Us">
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">About Wynnsea</p>
                            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{about?.title || 'Tentang Wynnsea'}</h1>
                            <p className="max-w-2xl text-base leading-8 text-slate-300">
                                {about?.description || 'Wynnsea adalah mitra transformasi digital yang fokus pada produk, pengalaman, dan hasil yang terukur.'}
                            </p>
                            <p className="max-w-2xl text-sm leading-7 text-slate-400">
                                Kami membangun solusi yang memadukan strategi bisnis, desain yang rapi, dan implementasi teknologi yang stabil.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href={route('produk')} className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:opacity-90">
                                    Lihat Produk
                                </Link>
                                <Link href={route('kontak')} className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                            <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-5">
                                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">History</p>
                                <h2 className="mt-3 text-2xl font-semibold text-white">{about?.history_title || 'Sejarah Perjalanan Kami'}</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Dari ide kecil hingga tim lintas disiplin, Wynnsea berkembang dengan fokus pada solusi yang dapat dipakai nyata.
                                </p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-4">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Focus</p>
                                    <p className="mt-2 text-lg font-semibold text-white">Web, mobile, dan konsultasi IT</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-4">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Approach</p>
                                    <p className="mt-2 text-lg font-semibold text-white">Praktis, cepat, dan terukur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}