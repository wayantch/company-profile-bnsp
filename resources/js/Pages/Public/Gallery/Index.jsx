import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Index({ galleries }) {
    const grouped = Object.entries(galleries || {});

    return (
        <PublicLayout title="Galeri">
            <section className="bg-base">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        Galeri
                    </p>
                    <h1 className=" mt-3 text-4xl font-semibold text-text sm:text-5xl">
                        Dokumentasi pekerjaan dan kegiatan
                    </h1>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-10">
                        {grouped.map(([category, items]) => (
                            <section key={category}>
                                <div className="mt-5 ">
                                    {(items || []).map((item) => (
                                        <article
                                            key={item.id}
                                            className="overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-sm shadow-ink/5 backdrop-blur-sm"
                                        >
                                            <div className="aspect-[4/3] bg-secondary/60">
                                                {item.image_path ? (
                                                    <img
                                                        src={item.image_path}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center text-sm text-muted">
                                                        Image placeholder
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                                                    {category}
                                                </p>
                                                <h3 className="text-lg font-semibold text-text [overflow-wrap:anywhere]">
                                                    {item.title}
                                                </h3>
                                                <Link
                                                    href={route(
                                                        "gallery.show",
                                                        item.id,
                                                    )}
                                                    className="mt-3 inline-block text-sm text-primary hover:text-primary-700"
                                                >
                                                    Lihat foto
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ))}

                        {!grouped.length && (
                            <div className="rounded-3xl border border-dashed border-border bg-surface/80 p-6 text-sm text-muted">
                                Belum ada data galeri.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
