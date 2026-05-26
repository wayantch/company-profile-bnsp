import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Index({ galleries }) {
    const grouped = Object.entries(galleries || {});

    return (
        <PublicLayout title="Gallery Foto">
            <section className="bg-[#0A0F1E]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                        Gallery
                    </p>
                    <h1 className=" mt-3 text-4xl font-semibold text-white sm:text-5xl">
                        Dokumentasi pekerjaan dan kegiatan
                    </h1>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-10">
                        {grouped.map(([category, items]) => (
                            <section key={category}>
                                <div className="mt-5 ">
                                    {(items || []).map((item) => (
                                        <article
                                            key={item.id}
                                            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                                        >
                                            <div className="aspect-[4/3] bg-[#111827]">
                                                {item.image_path ? (
                                                    <img
                                                        src={item.image_path}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                                                        Image placeholder
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                                    {category}
                                                </p>
                                                <h3 className="text-lg font-semibold text-white [overflow-wrap:anywhere]">
                                                    {item.title}
                                                </h3>
                                                <Link
                                                    href={route(
                                                        "gallery.show",
                                                        item.id,
                                                    )}
                                                    className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200"
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
                            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-sm text-slate-400">
                                Belum ada data gallery.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
