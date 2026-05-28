import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Produk({ products }) {
    return (
        <PublicLayout title="Produk Kami">
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-primary">
                                Produk
                            </p>
                            <h1 className="mt-3 text-4xl font-semibold text-text sm:text-5xl">
                                Solusi yang siap dipakai
                            </h1>
                        </div>
                        <Link
                            href={route("kontak")}
                            className="text-sm text-primary hover:text-primary-700"
                        >
                            Diskusi kebutuhan
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        {(products || []).map((product) => (
                            <article
                                key={product.id}
                                className="rounded-3xl border border-border bg-surface/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                        {product.icon || "Layanan"}
                                    </p>
                                    {product.is_featured && (
                                        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                                            Unggulan
                                        </span>
                                    )}
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-text">
                                    {product.name}
                                </h2>
                                <p className="mt-4 text-sm leading-7 text-muted">
                                    {product.short_description}
                                </p>
                                <p className="mt-4 text-sm leading-7 text-muted/80">
                                    {product.full_description}
                                </p>
                            </article>
                        ))}
                        {!products?.length && (
                            <div className="rounded-3xl border border-dashed border-border bg-surface/80 p-6 text-sm text-muted lg:col-span-2 xl:col-span-3">
                                Belum ada produk yang dipublikasikan.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
