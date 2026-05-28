import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Show({ gallery, relatedGalleries = [] }) {
    return (
        <PublicLayout title={gallery.title}>
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <Link
                        href={route("gallery.index")}
                        className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-text transition hover:border-primary/30 hover:text-primary"
                    >
                        Kembali ke galeri
                    </Link>

                    <article className="mt-8 overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-sm shadow-ink/5 backdrop-blur-sm">
                        {gallery.image_path && (
                            <img
                                src={gallery.image_path}
                                alt={gallery.title}
                                className="h-72 w-full object-cover sm:h-[34rem]"
                            />
                        )}

                        <div className="p-6 sm:p-8">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary">
                                {gallery.category || "Umum"}
                            </p>
                            <h1 className="mt-4 text-3xl font-semibold text-text sm:text-5xl [overflow-wrap:anywhere]">
                                {gallery.title}
                            </h1>
                        </div>
                    </article>

                    <div className="mt-10">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary">
                            Foto Lainnya
                        </p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            {relatedGalleries.length ? (
                                relatedGalleries.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={route("gallery.show", item.id)}
                                        className="rounded-3xl border border-border bg-surface/80 p-4 transition hover:border-primary/30 hover:bg-secondary/70"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary/60">
                                            {item.image_path ? (
                                                <img
                                                    src={item.image_path}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-xs text-muted">
                                                    Tidak ada gambar
                                                </div>
                                            )}
                                        </div>
                                        <p className="mt-3 text-sm font-semibold text-text [overflow-wrap:anywhere]">
                                            {item.title}
                                        </p>
                                    </Link>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-border bg-surface/80 p-6 text-sm text-muted md:col-span-3">
                                    Belum ada foto terkait.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
