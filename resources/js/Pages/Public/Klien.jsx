import PublicLayout from "@/Layouts/PublicLayout";

export default function Klien({ clients }) {
    return (
        <PublicLayout title="Klien Kami">
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                        Klien Kami
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                        Mereka yang mempercayakan proyeknya pada kami
                    </h1>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {(clients || []).map((client) => (
                            <article
                                key={client.id}
                                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                            >
                                <div className="aspect-[16/10] bg-white/95 p-6">
                                    {client.logo_path ? (
                                        <img
                                            src={client.logo_path}
                                            alt={client.name}
                                            className="h-full w-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.24em] text-slate-500">
                                            No Logo
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                        Partner
                                    </p>
                                    <h2 className="mt-4 text-2xl font-semibold text-white [overflow-wrap:anywhere]">
                                        {client.name}
                                    </h2>
                                    <p className="mt-4 line-clamp-4 [overflow-wrap:anywhere] text-sm leading-7 text-slate-300">
                                        {client.description ||
                                            "Deskripsi klien belum tersedia."}
                                    </p>
                                    {client.website && (
                                        <a
                                            href={client.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-5 inline-block text-sm text-cyan-300 hover:text-cyan-200 [overflow-wrap:anywhere]"
                                        >
                                            Kunjungi website
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                        {!clients?.length && (
                            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-sm text-slate-400 md:col-span-2 xl:col-span-3">
                                Belum ada data klien.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
