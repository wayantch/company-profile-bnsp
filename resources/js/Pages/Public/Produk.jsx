import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Produk({ products }) {
    return (
        <PublicLayout title="Produk Kami">
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Produk</p>
                            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Solusi yang siap dipakai</h1>
                        </div>
                        <Link href={route('kontak')} className="text-sm text-cyan-300 hover:text-cyan-200">Diskusi kebutuhan</Link>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        {(products || []).map((product) => (
                            <article key={product.id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{product.icon || 'Service'}</p>
                                    {product.is_featured && (
                                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-white">{product.name}</h2>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{product.short_description}</p>
                                <p className="mt-4 text-sm leading-7 text-slate-400">{product.full_description}</p>
                            </article>
                        ))}
                        {!products?.length && (
                            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-sm text-slate-400 lg:col-span-2 xl:col-span-3">
                                Belum ada produk yang dipublikasikan.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}