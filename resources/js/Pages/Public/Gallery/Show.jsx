import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Show({ gallery, relatedGalleries = [] }) {
    return (
        <PublicLayout title={gallery.title}>
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <Link
                        href={route("gallery.index")}
                        className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                        Kembali ke gallery
                    </Link>

                    <article className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                        {gallery.image_path && (
                            <img
                                src={gallery.image_path}
                                alt={gallery.title}
                                className="h-72 w-full object-cover sm:h-[34rem]"
                            />
                        )}

                        <div className="p-6 sm:p-8">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                {gallery.category || "Umum"}
                            </p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl [overflow-wrap:anywhere]">
                                {gallery.title}
                            </h1>
                        </div>
                    </article>

                    <div className="mt-10">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Foto Lainnya
                        </p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            {relatedGalleries.length ? (
                                relatedGalleries.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={route("gallery.show", item.id)}
                                        className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/50"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900/80">
                                            {item.image_path ? (
                                                <img
                                                    src={item.image_path}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-xs text-slate-400">
                                                    No image
                                                </div>
                                            )}
                                        </div>
                                        <p className="mt-3 text-sm font-semibold text-white [overflow-wrap:anywhere]">
                                            {item.title}
                                        </p>
                                    </Link>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-sm text-slate-400 md:col-span-3">
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
